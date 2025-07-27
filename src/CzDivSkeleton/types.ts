import { HTMLAttributes } from 'react';
import { CzDivProps } from '../CzDiv';

/**
 * CzDivSkeletonのプロパティ
 */
export type CzDivSkeletonProps = CzDivSkeletonOwnProps & CzDivProps;

/**
 * CzDivSkeleton固有のプロパティ
 */
export type CzDivSkeletonOwnProps = HTMLAttributes<HTMLDivElement>;
