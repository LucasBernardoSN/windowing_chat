import { render } from '@testing-library/react';

import { App } from '../App';

describe('App Component', () => {
  it('Deve mostrar a saudação de boas vindas', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
