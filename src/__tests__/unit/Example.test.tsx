
import React from 'react';
import { render, screen } from '@testing-library/react';
import Example from '@/components/Example';

describe('Example Component', () => {
  it('renders the component correctly', () => {
    render(<Example />);
    expect(screen.getByText('Example Component')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
