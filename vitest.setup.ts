import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Run a cleanup after each test
afterEach(() => {
  cleanup();
});