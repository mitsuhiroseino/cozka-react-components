import { HTMLAttributes } from 'react';
import { CzDivProps } from '../CzDiv';

/**
 * プロパティ
 */
export type CzDivSkeletonProps = CzDivSkeletonOwnProps & CzDivProps;

/**
 * 固有のプロパティ
 */
export type CzDivSkeletonOwnProps = HTMLAttributes<HTMLDivElement>;
