import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * useEffect that skips the first render
 */
export function useEffectSkipFirst(effect: EffectCallback, deps?: DependencyList): void {
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current === false) {
      effect();
    } else {
      firstRender.current = false;
    }
  }, deps);
}
