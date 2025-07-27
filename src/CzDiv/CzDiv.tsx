/** @jsxImportSource @emotion/react */
import withCzStyledProps from '../hoc/withCzStyledProps';
import { CzDivOwnProps } from './types';

/**
 * スタイル関連のプロパティを直接設定できるdiv
 */
const CzDiv = withCzStyledProps<CzDivOwnProps, HTMLDivElement>('div');
CzDiv.displayName = 'CzDiv';
export default CzDiv;
