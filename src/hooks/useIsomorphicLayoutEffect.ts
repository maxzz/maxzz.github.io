import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from './utils';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect; // version from react-use

export default useIsomorphicLayoutEffect;