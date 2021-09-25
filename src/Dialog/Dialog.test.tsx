import { render, screen } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import 'jest-axe/extend-expect';
import { Dialog } from './Dialog';

const axe = configureAxe({
  rules: {
    region: { enabled: false },
  }
})

describe('Dialog', () => {
  it('dialog is accessible', async () => {
    render(<Dialog open title="I'm title" width={200} height={200} onClose={jest.fn()} children={null} />);
    const dialog = screen.getByRole('dialog').children[0];

    expect(await axe(dialog)).toHaveNoViolations();
  });
});
