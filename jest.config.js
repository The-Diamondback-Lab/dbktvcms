/**
 * @file Jest configuration
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

module.exports = {
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  roots: [
    '<rootDir>'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/__mocks__/*',
    '<rootDir>/tests/__snaps__/*'
  ],
  testURL: 'http://localhost:5000',
  verbose: true
}
