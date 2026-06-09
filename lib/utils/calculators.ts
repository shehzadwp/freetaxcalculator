import { federalTaxBrackets2024, ficaRates2024, stateTaxRates2024, standardDeduction2024 } from '@/lib/taxData/federal2024';

export interface TaxCalculationResult {
  gross: number;
  federalTax: number;
  socialSecurity: number;
  medicare: number;
  stateTax: number;
  totalTax: number;
  afterTax: number;
  effectiveTaxRate: string;
  marginalTaxRate: string;
}

/**
 * Calculate federal income tax based on taxable income
 */
export const calculateFederalTax = (taxableIncome: number): number => {
  if (taxableIncome <= 0) return 0;

  let tax = 0;

  federalTaxBrackets2024.forEach((bracket) => {
    if (taxableIncome > bracket.min) {
      const incomeInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
      tax += incomeInBracket * bracket.rate;
    }
  });

  return tax;
};

/**
 * Calculate Social Security tax (OASDI)
 */
export const calculateSocialSecurityTax = (grossIncome: number): number => {
  const wage = Math.min(grossIncome, ficaRates2024.socialSecurityWageBase);
  return wage * ficaRates2024.socialSecurity;
};

/**
 * Calculate Medicare tax
 */
export const calculateMedicareTax = (grossIncome: number): number => {
  return grossIncome * ficaRates2024.medicare;
};

/**
 * Calculate state income tax
 */
export const calculateStateTax = (
  grossIncome: number,
  state: string = 'CA'
): number => {
  const rate = stateTaxRates2024[state] || stateTaxRates2024['CA'];
  return grossIncome * rate;
};

/**
 * Get state tax rate
 */
export const getStateTaxRate = (state: string): number => {
  return stateTaxRates2024[state] || 0.05;
};

/**
 * Calculate complete tax breakdown
 */
export const calculateTaxes = (
  grossIncome: number,
  state: string = 'CA',
  filingStatus: 'single' | 'married' | 'head' = 'single'
): TaxCalculationResult => {
  // Get standard deduction
  const standardDeductionAmount =
    filingStatus === 'married'
      ? standardDeduction2024.married
      : filingStatus === 'head'
        ? standardDeduction2024.headOfHousehold
        : standardDeduction2024.single;

  // Calculate taxable income
  const taxableIncome = Math.max(0, grossIncome - standardDeductionAmount);

  // Calculate taxes
  const federalTax = calculateFederalTax(taxableIncome);
  const socialSecurity = calculateSocialSecurityTax(grossIncome);
  const medicare = calculateMedicareTax(grossIncome);
  const stateTax = calculateStateTax(grossIncome, state);

  const totalTax = federalTax + socialSecurity + medicare + stateTax;
  const afterTax = grossIncome - totalTax;

  // Calculate rates
  const effectiveTaxRate = grossIncome > 0 ? ((totalTax / grossIncome) * 100).toFixed(2) : '0.00';
  const marginalTaxRate = getMarginalTaxRate(taxableIncome);

  return {
    gross: Math.round(grossIncome),
    federalTax: Math.round(federalTax),
    socialSecurity: Math.round(socialSecurity),
    medicare: Math.round(medicare),
    stateTax: Math.round(stateTax),
    totalTax: Math.round(totalTax),
    afterTax: Math.round(afterTax),
    effectiveTaxRate,
    marginalTaxRate,
  };
};

/**
 * Get marginal tax rate for given income
 */
export const getMarginalTaxRate = (taxableIncome: number): string => {
  const brackets = federalTaxBrackets2024;

  for (let i = brackets.length - 1; i >= 0; i--) {
    if (taxableIncome >= brackets[i].min) {
      return ((brackets[i].rate * 100).toFixed(1));
    }
  }

  return '10.0';
};

/**
 * Format currency
 */
export const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

/**
 * Format currency with cents
 */
export const formatCurrencyWithCents = (value: number): string => {
  return `$${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

/**
 * Calculate take-home pay by pay period
 */
export const calculatePayPeriods = (afterTaxIncome: number) => {
  return {
    annual: Math.round(afterTaxIncome),
    monthly: Math.round(afterTaxIncome / 12),
    biweekly: Math.round(afterTaxIncome / 26),
    weekly: Math.round(afterTaxIncome / 52),
    daily: Math.round(afterTaxIncome / 260),
    hourly: Math.round((afterTaxIncome / 260) / 8),
  };
};

/**
 * Estimate annual tax from monthly income
 */
export const estimateFromMonthly = (
  monthlyIncome: number,
  state: string = 'CA'
): TaxCalculationResult => {
  const annualIncome = monthlyIncome * 12;
  return calculateTaxes(annualIncome, state);
};

/**
 * Estimate annual tax from hourly wage
 */
export const estimateFromHourly = (
  hourlyWage: number,
  hoursPerWeek: number = 40,
  weeksPerYear: number = 52,
  state: string = 'CA'
): TaxCalculationResult => {
  const annualIncome = hourlyWage * hoursPerWeek * weeksPerYear;
  return calculateTaxes(annualIncome, state);
};

/**
 * Get all states sorted by tax rate
 */
export const getStatesByTax = (): Array<{ state: string; rate: number }> => {
  return Object.entries(stateTaxRates2024)
    .map(([state, rate]) => ({ state, rate }))
    .sort((a, b) => b.rate - a.rate);
};
