import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App Integration', () => {
  it('should render the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      name: /React TS Template/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render the example component', () => {
    render(<App />);
    const exampleComponent = screen.getByText(/Example Component/i);
    expect(exampleComponent).toBeInTheDocument();
  });
});
