/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import withCzStyledProps from '../hoc/withCzStyledProps';
import { CzDivSkeletonOwnProps } from './types';

export type CzDivSkeletonOptions = {};

const CzDivSkeleton = forwardRef<HTMLDivElement, CzDivSkeletonOwnProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    // CzDivSkeletonはスタイルを直接設定できるdiv
    const CzDiv = withCzStyledProps<CzDivSkeletonOwnProps, HTMLDivElement>(
      'div',
    );

    return (
      <CzDiv ref={ref} {...rest}>
        {children}
      </CzDiv>
    );
  },
);
CzDivSkeleton.displayName = 'CzDivSkeleton';
export default CzDivSkeleton;
