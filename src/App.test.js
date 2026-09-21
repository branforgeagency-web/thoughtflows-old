import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './NotFound';
import { isValidPhone, normalizePhone } from './utils/phone';

test('NotFound page renders a way back home', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </HelmetProvider>
  );
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /go to home/i })).toHaveAttribute('href', '/');
});

test('phone validation accepts Indian mobiles with or without +91', () => {
  expect(isValidPhone('9384576852')).toBe(true);
  expect(isValidPhone('+91 93845 76852')).toBe(true);
  expect(normalizePhone('+91-9384576852')).toBe('9384576852');
  expect(isValidPhone('1234567890')).toBe(false);
  expect(isValidPhone('98765')).toBe(false);
});
