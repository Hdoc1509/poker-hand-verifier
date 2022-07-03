module.exports = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  globals: { 'ts-jest': { useESM: true } },
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },
};
