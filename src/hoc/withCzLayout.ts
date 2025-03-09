import { WidthLayoutOptions, withLayout } from '@cozka/react-layout';
import { jsx } from '@emotion/react';
import { ElementType, Key } from 'react';

function _jsx(type: ElementType, props: unknown, key?: Key) {
  return jsx(type, props);
}

export default function withCzLayout<
  P extends Record<string, any>,
  T = unknown,
>(Component: ElementType<P>, options: WidthLayoutOptions = {}) {
  const {
    styleProp = 'css',
    styleApplyMode = 'append',
    jsxRuntime = _jsx,
    ...rest
  } = options;
  return withLayout<P, T>(Component, {
    styleProp,
    styleApplyMode,
    jsxRuntime,
    ...rest,
  });
}
