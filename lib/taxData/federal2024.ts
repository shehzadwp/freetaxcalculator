// 2024 Federal Tax Brackets
export const federalTaxBrackets2024 = [
  { min: 0, max: 11000, rate: 0.1, label: 'Single' },
  { min: 11000, max: 44725, rate: 0.12, label: 'Single' },
  { min: 44725, max: 95375, rate: 0.22, label: 'Single' },
  { min: 95375, max: 182100, rate: 0.24, label: 'Single' },
  { min: 182100, max: 231250, rate: 0.32, label: 'Single' },
  { min: 231250, max: 578125, rate: 0.35, label: 'Single' },
  { min: 578125, max: Infinity, rate: 0.37, label: 'Single' },
];

// Standard Deduction 2024
export const standardDeduction2024 = {
  single: 13850,
  married: 27700,
  headOfHousehold: 20800,
};

// FICA Rates 2024
export const ficaRates2024 = {
  socialSecurity: 0.062,
  socialSecurityWageBase: 168600,
  medicare: 0.0145,
  additionalMedicare: 0.009,
  additionalMedicareThreshold: 200000,
};

// State Tax Rates (simplified averages for 2024)
export const stateTaxRates2024: { [key: string]: number } = {
  AL: 0.05,
  AK: 0,
  AZ: 0.0475,
  AR: 0.055,
  CA: 0.093,
  CO: 0.0455,
  CT: 0.0699,
  DE: 0.0655,
  FL: 0,
  GA: 0.055,
  HI: 0.08,
  ID: 0.058,
  IL: 0.0495,
  IN: 0.0323,
  IA: 0.0553,
  KS: 0.0557,
  KY: 0.05,
  LA: 0.06,
  ME: 0.0715,
  MD: 0.0799,
  MA: 0.05,
  MI: 0.0425,
  MN: 0.0985,
  MS: 0.05,
  MO: 0.055,
  MT: 0.068,
  NE: 0.068,
  NV: 0,
  NH: 0,
  NJ: 0.0885,
  NM: 0.059,
  NY: 0.0685,
  NC: 0.0495,
  ND: 0.029,
  OH: 0.05,
  OK: 0.0575,
  OR: 0.0765,
  PA: 0.0307,
  RI: 0.0699,
  SC: 0.07,
  SD: 0,
  TN: 0,
  TX: 0,
  UT: 0.0495,
  VT: 0.0775,
  VA: 0.0575,
  WA: 0,
  WV: 0.065,
  WI: 0.0764,
  WY: 0,
  DC: 0.0775,
};

// State Names
export const stateAbbreviations = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC',
];

// Federal Tax Brackets for Different Filing Statuses
export const getTaxBrackets = (filingStatus: 'single' | 'married' | 'head' = 'single') => {
  if (filingStatus === 'married') {
    return [
      { min: 0, max: 22000, rate: 0.1 },
      { min: 22000, max: 89075, rate: 0.12 },
      { min: 89075, max: 190750, rate: 0.22 },
      { min: 190750, max: 364200, rate: 0.24 },
      { min: 364200, max: 462500, rate: 0.32 },
      { min: 462500, max: 693750, rate: 0.35 },
      { min: 693750, max: Infinity, rate: 0.37 },
    ];
  } else if (filingStatus === 'head') {
    return [
      { min: 0, max: 15650, rate: 0.1 },
      { min: 15650, max: 59575, rate: 0.12 },
      { min: 59575, max: 95375, rate: 0.22 },
      { min: 95375, max: 182100, rate: 0.24 },
      { min: 182100, max: 231250, rate: 0.32 },
      { min: 231250, max: 578125, rate: 0.35 },
      { min: 578125, max: Infinity, rate: 0.37 },
    ];
  }
  // Default: single
  return federalTaxBrackets2024;
};
