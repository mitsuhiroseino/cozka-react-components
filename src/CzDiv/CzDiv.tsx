/** @jsxImportSource @emotion/react */
import withCzStyledProps from '../hoc/withCzStyledProps';
import { CzDivPropsBase } from './types';

/**
 * スタイル関連のプロパティを直接設定できるdiv
 */
const CzDiv = withCzStyledProps<CzDivPropsBase, HTMLDivElement>('div');
CzDiv.displayName = 'CzDiv';
export default CzDiv;
