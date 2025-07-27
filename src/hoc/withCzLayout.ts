import { WidthLayoutOptions, withLayout } from '@cozka/react-layout';
import { jsx } from '@emotion/react';
import { ElementType } from 'react';

function _jsx(type: ElementType, props: unknown) {
  return jsx(type, props);
}

export default function withCzLayout<P extends object = {}, T = unknown>(
  Component: ElementType<P>,
  options: WidthLayoutOptions = {},
) {
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
