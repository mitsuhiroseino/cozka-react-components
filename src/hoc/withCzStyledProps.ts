import { StylePropsOptions, withStyledProps } from '@cozka/react-style-props';
import { jsx } from '@emotion/react';
import { ElementType } from 'react';

function _jsx(type: ElementType, props: unknown) {
  return jsx(type, props);
}

export default function withCzStyledProps<
  P extends Record<string, any>,
  T = unknown,
>(Component: ElementType<P>, options: StylePropsOptions = {}) {
  const {
    styleProp = 'css',
    styleApplyMode = 'append',
    jsxRuntime = _jsx,
    ...rest
  } = options;
  return withStyledProps<P, T>(Component, {
    styleProp,
    styleApplyMode,
    jsxRuntime,
    ...rest,
  });
}
