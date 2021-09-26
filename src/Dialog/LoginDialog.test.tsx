import { render, screen } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import 'jest-axe/extend-expect';
import { LoginDialog } from './LoginDialog';

const axe = configureAxe({
  rules: {
    region: { enabled: false },
  }
})

describe('LoginDialog', () => {
  it('LoginDialog is accessible', async () => {
    render(<LoginDialog open onClose={jest.fn()} />);
    const dialog = screen.getByRole('dialog').children[0];

    expect(await axe(dialog)).toHaveNoViolations();
  });
});
