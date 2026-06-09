export interface StateInfo {
  name: string;
  abbreviation: string;
  taxRate: number;
  hasStateTax: boolean;
  notes?: string;
}

export const stateInfoData: { [key: string]: StateInfo } = {
  AL: {
    name: 'Alabama',
    abbreviation: 'AL',
    taxRate: 0.05,
    hasStateTax: true,
    notes: 'Progressive tax system based on income',
  },
  AK: {
    name: 'Alaska',
    abbreviation: 'AK',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax',
  },
  AZ: {
    name: 'Arizona',
    abbreviation: 'AZ',
    taxRate: 0.0475,
    hasStateTax: true,
    notes: 'Graduated tax rates apply',
  },
  AR: {
    name: 'Arkansas',
    abbreviation: 'AR',
    taxRate: 0.055,
    hasStateTax: true,
  },
  CA: {
    name: 'California',
    abbreviation: 'CA',
    taxRate: 0.093,
    hasStateTax: true,
    notes: 'Highest state tax rate in the nation',
  },
  CO: {
    name: 'Colorado',
    abbreviation: 'CO',
    taxRate: 0.0455,
    hasStateTax: true,
  },
  CT: {
    name: 'Connecticut',
    abbreviation: 'CT',
    taxRate: 0.0699,
    hasStateTax: true,
  },
  DE: {
    name: 'Delaware',
    abbreviation: 'DE',
    taxRate: 0.0655,
    hasStateTax: true,
  },
  FL: {
    name: 'Florida',
    abbreviation: 'FL',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax - Popular retirement destination',
  },
  GA: {
    name: 'Georgia',
    abbreviation: 'GA',
    taxRate: 0.055,
    hasStateTax: true,
  },
  HI: {
    name: 'Hawaii',
    abbreviation: 'HI',
    taxRate: 0.08,
    hasStateTax: true,
  },
  ID: {
    name: 'Idaho',
    abbreviation: 'ID',
    taxRate: 0.058,
    hasStateTax: true,
  },
  IL: {
    name: 'Illinois',
    abbreviation: 'IL',
    taxRate: 0.0495,
    hasStateTax: true,
    notes: 'Flat tax rate for residents',
  },
  IN: {
    name: 'Indiana',
    abbreviation: 'IN',
    taxRate: 0.0323,
    hasStateTax: true,
    notes: 'One of the lowest state tax rates',
  },
  IA: {
    name: 'Iowa',
    abbreviation: 'IA',
    taxRate: 0.0553,
    hasStateTax: true,
  },
  KS: {
    name: 'Kansas',
    abbreviation: 'KS',
    taxRate: 0.0557,
    hasStateTax: true,
  },
  KY: {
    name: 'Kentucky',
    abbreviation: 'KY',
    taxRate: 0.05,
    hasStateTax: true,
  },
  LA: {
    name: 'Louisiana',
    abbreviation: 'LA',
    taxRate: 0.06,
    hasStateTax: true,
  },
  ME: {
    name: 'Maine',
    abbreviation: 'ME',
    taxRate: 0.0715,
    hasStateTax: true,
  },
  MD: {
    name: 'Maryland',
    abbreviation: 'MD',
    taxRate: 0.0799,
    hasStateTax: true,
  },
  MA: {
    name: 'Massachusetts',
    abbreviation: 'MA',
    taxRate: 0.05,
    hasStateTax: true,
  },
  MI: {
    name: 'Michigan',
    abbreviation: 'MI',
    taxRate: 0.0425,
    hasStateTax: true,
  },
  MN: {
    name: 'Minnesota',
    abbreviation: 'MN',
    taxRate: 0.0985,
    hasStateTax: true,
  },
  MS: {
    name: 'Mississippi',
    abbreviation: 'MS',
    taxRate: 0.05,
    hasStateTax: true,
  },
  MO: {
    name: 'Missouri',
    abbreviation: 'MO',
    taxRate: 0.055,
    hasStateTax: true,
  },
  MT: {
    name: 'Montana',
    abbreviation: 'MT',
    taxRate: 0.068,
    hasStateTax: true,
  },
  NE: {
    name: 'Nebraska',
    abbreviation: 'NE',
    taxRate: 0.068,
    hasStateTax: true,
  },
  NV: {
    name: 'Nevada',
    abbreviation: 'NV',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax',
  },
  NH: {
    name: 'New Hampshire',
    abbreviation: 'NH',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax - Tax-friendly state',
  },
  NJ: {
    name: 'New Jersey',
    abbreviation: 'NJ',
    taxRate: 0.0885,
    hasStateTax: true,
  },
  NM: {
    name: 'New Mexico',
    abbreviation: 'NM',
    taxRate: 0.059,
    hasStateTax: true,
  },
  NY: {
    name: 'New York',
    abbreviation: 'NY',
    taxRate: 0.0685,
    hasStateTax: true,
    notes: 'High state tax on high earners',
  },
  NC: {
    name: 'North Carolina',
    abbreviation: 'NC',
    taxRate: 0.0495,
    hasStateTax: true,
  },
  ND: {
    name: 'North Dakota',
    abbreviation: 'ND',
    taxRate: 0.029,
    hasStateTax: true,
    notes: 'Lowest state tax rate',
  },
  OH: {
    name: 'Ohio',
    abbreviation: 'OH',
    taxRate: 0.05,
    hasStateTax: true,
  },
  OK: {
    name: 'Oklahoma',
    abbreviation: 'OK',
    taxRate: 0.0575,
    hasStateTax: true,
  },
  OR: {
    name: 'Oregon',
    abbreviation: 'OR',
    taxRate: 0.0765,
    hasStateTax: true,
  },
  PA: {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    taxRate: 0.0307,
    hasStateTax: true,
    notes: 'Flat tax rate for residents',
  },
  RI: {
    name: 'Rhode Island',
    abbreviation: 'RI',
    taxRate: 0.0699,
    hasStateTax: true,
  },
  SC: {
    name: 'South Carolina',
    abbreviation: 'SC',
    taxRate: 0.07,
    hasStateTax: true,
  },
  SD: {
    name: 'South Dakota',
    abbreviation: 'SD',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax',
  },
  TN: {
    name: 'Tennessee',
    abbreviation: 'TN',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax - Popular retiree destination',
  },
  TX: {
    name: 'Texas',
    abbreviation: 'TX',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax - Growing tech hub',
  },
  UT: {
    name: 'Utah',
    abbreviation: 'UT',
    taxRate: 0.0495,
    hasStateTax: true,
  },
  VT: {
    name: 'Vermont',
    abbreviation: 'VT',
    taxRate: 0.0775,
    hasStateTax: true,
  },
  VA: {
    name: 'Virginia',
    abbreviation: 'VA',
    taxRate: 0.0575,
    hasStateTax: true,
  },
  WA: {
    name: 'Washington',
    abbreviation: 'WA',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax',
  },
  WV: {
    name: 'West Virginia',
    abbreviation: 'WV',
    taxRate: 0.065,
    hasStateTax: true,
  },
  WI: {
    name: 'Wisconsin',
    abbreviation: 'WI',
    taxRate: 0.0764,
    hasStateTax: true,
  },
  WY: {
    name: 'Wyoming',
    abbreviation: 'WY',
    taxRate: 0,
    hasStateTax: false,
    notes: 'No state income tax',
  },
  DC: {
    name: 'District of Columbia',
    abbreviation: 'DC',
    taxRate: 0.0775,
    hasStateTax: true,
  },
};

export const getStateInfo = (stateAbbrev: string): StateInfo | null => {
  return stateInfoData[stateAbbrev.toUpperCase()] || null;
};

export const getStatesByTaxRate = (ascending = false) => {
  const states = Object.values(stateInfoData);
  return states.sort((a, b) =>
    ascending ? a.taxRate - b.taxRate : b.taxRate - a.taxRate
  );
};

export const getStatesByTaxFree = () => {
  return Object.values(stateInfoData).filter((state) => !state.hasStateTax);
};
