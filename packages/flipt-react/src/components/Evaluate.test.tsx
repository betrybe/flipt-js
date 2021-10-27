import React from 'react';
import useEvaluation from '../hooks/useEvaluation';
import Evaluate from './Evaluate';
import { render, screen } from '@testing-library/react';

jest.mock('../hooks/useEvaluation', () => ({
  __esModule: true,
  default: jest.fn(),
}));

function LoadingComponent() {
  return (
    <div data-testid="loading-component">
      <p>Loading ...</p>
    </div>
  );
}

describe('Evaluate | Componet | Integration test', () => {
  it('mostra loading quando useEvaluation conter o estado loading igual a true (verdadeiro)', () => {
    (useEvaluation as jest.Mock).mockReturnValue({
      loading: true,
      match: false,
      error: null,
    });

    render(
      <Evaluate
        flagKey="flag-key"
        loading={<LoadingComponent />}
        context={{ userId: '123' }}
        entityId="123">
        <button>Vem pra Trybe! </button>
      </Evaluate>,
    );

    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });
});
