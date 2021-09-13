import { renderHook } from '@testing-library/react-hooks';
import useMounted from './useMounted';

describe('hooks/useMounted', () => {
  it('returns a function that checks if component is mounted', () => {
    const { result, rerender, unmount } = renderHook(() => useMounted());

    expect(result.current()).toBe(true);

    rerender();

    expect(result.current()).toBe(true);

    unmount();

    expect(result.current()).toBe(false);
  });
});
