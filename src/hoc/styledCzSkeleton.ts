import { WidthLayoutOptions, withLayout } from '@cozka/react-layout';
import styled, { Interpolation } from '@emotion/styled';
import { ElementType } from 'react';

export type StyledCzSkeletonOptions<P = {}> = {
  defaultProps?: P;
  css?: Interpolation<P>;
  borderRadius?: string | number;
};

export default function styledCzSkeleton<
  P extends Record<string, any>,
  T = unknown,
>(Component: ElementType<P>, options: StyledCzSkeletonOptions<P> = {}) {
  const { defaultProps, css, borderRadius = 4 } = options;
  const StyledComponent = styled(Component)({
    backgroundColor: 'rgba(128, 128, 128, 0.4)',
    '$.cz-s-rounded': {
      borderRadius,
    },
    '$.cz-s-circle': {
      borderRadius: '50%',
    },
  });
}
