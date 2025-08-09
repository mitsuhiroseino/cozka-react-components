import { StyleProps } from '@cozka/react-style-props';
import { HTMLAttributes } from 'react';

/**
 * プロパティ
 */
export type CzDivProps = CzDivOwnProps & StyleProps;

/**
 * 固有のプロパティ
 */
export type CzDivOwnProps = HTMLAttributes<HTMLDivElement>;
