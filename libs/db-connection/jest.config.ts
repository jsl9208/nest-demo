import { Config } from '@jest/types';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  maxWorkers: 4,
} as Config.InitialOptions;
