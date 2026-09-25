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

test('getBranchInfoByPath resolves correct branch data for each branch route', () => {
  const { getBranchInfoByPath, defaultBranchDetails } = require('./data/branchDetails');

  // Gandhipuram
  const gandhipuram = getBranchInfoByPath('/Premier-Medical-Coding-Institute-Gandhipuram');
  expect(gandhipuram).not.toBeNull();
  expect(gandhipuram.phone).toContain('93845 76852');
  expect(gandhipuram.address).toContain('1084, 3rd St, Cross Cut Road, Gandhipuram');
  expect(gandhipuram.instagram).toContain('thought_flows');
  expect(gandhipuram.facebook).toContain('Gandhipuram-Coimbatore');

  // Hopes
  const hopes = getBranchInfoByPath('/Medical-Coding-Excellence-at-Hopes');
  expect(hopes).not.toBeNull();
  expect(hopes.address).toContain('Lalitha Towers');
  expect(hopes.facebook).toContain('thoughtflowscoimbatore');

  // Saravanampatti
  const cbe1 = getBranchInfoByPath('/Top-Medical-Coding-Training-Saravanampatti');
  expect(cbe1).not.toBeNull();
  expect(cbe1.address).toContain('Saravanampatti');

  // Trichy
  const trichy = getBranchInfoByPath('/Career-Focused-Medical-Coding-Trichy');
  expect(trichy).not.toBeNull();
  expect(trichy.address).toContain('AMIL towers');
  expect(trichy.instagram).toContain('thoughtflows_trichy');

  // Salem
  const salem = getBranchInfoByPath('/Future-Ready-Medical-Coding-Salem');
  expect(salem).not.toBeNull();
  expect(salem.phone).toContain('81487 32017');
  expect(salem.instagram).toContain('thoughtflowssalem');

  // Kochi
  const kochi = getBranchInfoByPath('/Medical-Coding-Academy-Kochi');
  expect(kochi).not.toBeNull();
  expect(kochi.phone).toContain('90480 23242');
  expect(kochi.address).toContain('Vee Vee Tower');

  // Trivandrum
  const trivandrum = getBranchInfoByPath('/Advanced-Medical-Coding-Tiruvandrum');
  expect(trivandrum).not.toBeNull();
  expect(trivandrum.phone).toContain('90480 23242');
  expect(trivandrum.address).toContain('Karimpanal Arcade');

  // Ameerpet
  const ameerpet = getBranchInfoByPath('/Trusted-Medical-Coding-Ameerpet');
  expect(ameerpet).not.toBeNull();
  expect(ameerpet.phone).toContain('87907 51742');
  expect(ameerpet.address).toContain('Vasavi Mpm Grand');

  // Dilsukhnagar
  const dilsukhnagar = getBranchInfoByPath('/Professional-Medical-Coding-Dilsukhnagar');
  expect(dilsukhnagar).not.toBeNull();
  expect(dilsukhnagar.phone).toContain('90305 08844');
  expect(dilsukhnagar.address).toContain('Sai Towers');

  // Vizag
  const vizag = getBranchInfoByPath('/Innovative-Medical-Coding-Vizag');
  expect(vizag).not.toBeNull();
  expect(vizag.phone).toContain('89775 07230');
  expect(vizag.address).toContain('IT Grand Palace');

  // Tirupati
  const tirupati = getBranchInfoByPath('/Expert-Medical-Coding-Tirupathi');
  expect(tirupati).not.toBeNull();
  expect(tirupati.phone).toContain('87904 24835');
  expect(tirupati.address).toContain('MIOT Diagnostic center');

  // Pune and Kolhapur (left empty for future update)
  const pune = getBranchInfoByPath('/medical-coding-course-pune/');
  expect(pune).not.toBeNull();
  expect(pune.phone).toBe('');
  expect(pune.address).toBe('');

  const kolhapur = getBranchInfoByPath('/Medical-Coding-Training-Kolhapur');
  expect(kolhapur).not.toBeNull();
  expect(kolhapur.phone).toBe('');
  expect(kolhapur.address).toBe('');

  // Theni
  const theni = getBranchInfoByPath('/medical-coding-course-theni');
  expect(theni).not.toBeNull();
  expect(theni.address).toContain('Forest Road');

  // Non-branch page returns null
  expect(getBranchInfoByPath('/about')).toBeNull();
  expect(getBranchInfoByPath('/')).toBeNull();
  expect(defaultBranchDetails.phone).toBeDefined();
});
