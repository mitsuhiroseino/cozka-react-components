import { StyleProps } from '@cozka/react-style-props';
import { HTMLAttributes } from 'react';

/**
 * CzDivのプロパティ
 */
export type CzDivProps = CzDivOwnProps & StyleProps;

/**
 * CzDiv固有のプロパティ
 */
export type CzDivOwnProps = HTMLAttributes<HTMLDivElement>;
