import React from 'react';
import useEvaluation from '../hooks/useEvaluation';
import { render, screen } from '@testing-library/react';
import Evaluate from './Evaluate';
jest.mock('../hooks/useEvaluation', () => ({
  __esModule: true,
  default: jest.fn(),
}));
function LoadingComponent() {
  return (
    <div data-testid="loading-component">
      <p>Loading...</p>
    </div>
  );
}
describe('Evaluate | component | integration test', () => {
  beforeEach(() => {
    (useEvaluation as jest.Mock).mockReturnValue({
      loading: false,
      match: false,
      error: null,
    });
  });
  it("shows loading component when useEvaluation is 'loading'", () => {
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
        <button>An incredible feature 🎉</button>
      </Evaluate>,
    );
    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });
  it("calls children as a function when it's passed like this", () => {
    const match = false;
    (useEvaluation as jest.Mock).mockReturnValue({
      loading: false,
      match,
      error: null,
    });
    const childrenFunction = jest.fn(
      (match: boolean) => match && <button>An incredible feature 🎉</button>,
    );
    render(
      <Evaluate
        flagKey="flag-key"
        loading={<LoadingComponent />}
        context={{ userId: '123' }}
        entityId="123">
        {childrenFunction}
      </Evaluate>,
    );
    expect(childrenFunction).toBeCalledWith(match);
  });
  it("when it's returned an error or match is false returns null", () => {
    (useEvaluation as jest.Mock).mockReturnValue({
      loading: false,
      match: false,
      error: null,
    });
    const { container, rerender } = render(
      <Evaluate
        flagKey="flag-key"
        loading={<LoadingComponent />}
        context={{ userId: '123' }}
        entityId="123">
        <button>An incredible feature 🎉</button>
      </Evaluate>,
    );
    expect(container.firstChild).toBeNull();
    (useEvaluation as jest.Mock).mockReturnValue({
      loading: false,
      match: true,
      error: new Error('Error'),
    });
    rerender(
      <Evaluate
        flagKey="flag-key"
        loading={<LoadingComponent />}
        context={{ userId: '123' }}
        entityId="123">
        <button>An incredible feature 🎉</button>
      </Evaluate>,
    );
    expect(container.firstChild).toBeNull();
  });
  it("returns children when it's all succeeded", () => {
    const SUCCEEDED_COMPONENT_ID = 'component-id';
    (useEvaluation as jest.Mock).mockReturnValue({
      loading: false,
      match: true,
      error: null,
    });
    render(
      <Evaluate
        flagKey="flag-key"
        loading={<LoadingComponent />}
        context={{ userId: '123' }}
        entityId="123">
        <button data-testid={SUCCEEDED_COMPONENT_ID}>
          An incredible feature 🎉
        </button>
      </Evaluate>,
    );
    expect(screen.getByTestId(SUCCEEDED_COMPONENT_ID)).toBeInTheDocument();
  });
});
