// colors which are not allowed to match
// GLOSSY SS TOP COVER --> CHROMED DETAILS --> BODY --> Dot PATTERN
export const colorRules = {
  'STANDARD CHROME': {
    'STAINLESS STEEL': [],
    'RED DL RD 34/PE': ['BLACK + SILVER LC RD 30/M/PE'],
    'GREEN DL GR 31': [],
    'WHITE NS WH 15/PE': [],
    'BLACK TR BK 50/P': [],
    'GREEN DL GR 84/PE': [],
    'YELLOW DL YE 78/PE': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + SILVER DL YE 45/M/PEG',
    ],
    'SILVER AT BG 50/M/PE': ['BLACK + SILVER LC RD 30/M/PE'],
    'GREY LC BW 62/M/PM': ['BLACK + BROWN NS BW 87/M/PM'],
    'BROWN NS BW 87/M/PM': ['BLACK + GREY LC BW 62/M/PM'],
    'SILVER LC RD 30/M/PE': [
      'BLACK + YELLOW DL YE 78/PE',
      'BLACK + RED DL RD 34/PE',
    ],
    'SILVER DL YE 45/M/PEG': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
  },
  'GOLD CHROME': {
    'STAINLESS STEEL': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'RED DL RD 34/PE': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'GREEN DL GR 31': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'WHITE NS WH 15/PE': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'BLACK TR BK 50/P': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'GREEN DL GR 84/PE': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'YELLOW DL YE 78/PE': [
      'BLACK + WHITE NS WH 15/PE',
      'BLACK + YELLOW DL YE 78/PE',
      'BLACK + RED DL RD 34/PE',
      'BLACK + GREEN DL GR 84/PE',
      'BLACK + GREEN DL GR 31',
      'BLACK + SILVER DL YE 45/M/PEG',
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + BROWN NS BW 87/M/PM',
      'BLACK + SILVER AT BG 50/M/PE',
      'BLACK + GREY LC BW 62/M/PM',
    ], // all dot patterns
    'SILVER AT BG 50/M/PE': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
    'GREY LC BW 62/M/PM': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
      'BLACK + BROWN NS BW 87/M/PM',
    ],
    'BROWN NS BW 87/M/PM': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
      'BLACK + GREY LC BW 62/M/PM',
    ],
    'SILVER LC RD 30/M/PE': [
      'BLACK + YELLOW DL YE 78/PE',
      'BLACK + RED DL RD 34/PE',
    ],
    'SILVER DL YE 45/M/PEG': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
  },
  'BLACK CHROME': {
    'STAINLESS STEEL': [],
    'RED DL RD 34/PE': ['BLACK + SILVER LC RD 30/M/PE'],
    'GREEN DL GR 31': [],
    'WHITE NS WH 15/PE': [],
    'BLACK TR BK 50/P': [],
    'GREEN DL GR 84/PE': [],
    'YELLOW DL YE 78/PE': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + SILVER DL YE 45/M/PEG',
    ],
    'SILVER AT BG 50/M/PE': ['BLACK + SILVER LC RD 30/M/PE'],
    'GREY LC BW 62/M/PM': ['BLACK + BROWN NS BW 87/M/PM'],
    'BROWN NS BW 87/M/PM': ['BLACK + GREY LC BW 62/M/PM'],
    'SILVER LC RD 30/M/PE': [
      'BLACK + YELLOW DL YE 78/PE',
      'BLACK + RED DL RD 34/PE',
    ],
    'SILVER DL YE 45/M/PEG': [
      'BLACK + SILVER LC RD 30/M/PE',
      'BLACK + YELLOW DL YE 78/PE',
    ],
  },
};
