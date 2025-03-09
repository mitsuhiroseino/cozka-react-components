import { StyleProps } from '@cozka/react-style-props';
import { HTMLAttributes } from 'react';

/**
 * CzDivのプロパティ
 */
export type CzDivProps = CzDivPropsBase & StyleProps;

/**
 * CzDiv本来のプロパティ
 */
export type CzDivPropsBase = HTMLAttributes<HTMLDivElement>;
