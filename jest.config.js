module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src/'],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {"^.+\\.(ts|tsx)$": "ts-jest"},
    collectCoverage: true,
    collectCoverageFrom: ['client/src/**/*.js', '!client/src/index.tsx'],
    coveragePathIgnorePatterns: ['/node_modules/', '/config/', '/cypress/', '/store/'],
    coverageThreshold: {
        global: {
            branches: 0, //-> 80
            functions: 0, //-> 80
            lines: 0, //-> 80
        },
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
    modulePaths: ['src'],
};
