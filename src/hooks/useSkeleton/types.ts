import { UseDeferUntilReadyOptions } from '@cozka/react-defer-rendering/useDeferUntilReady';

export type UseSkeletonOptions = UseDeferUntilReadyOptions & {
  variant?: 'sharp' | 'rounded' | 'circle';
  animation?: 'pulse' | 'wave' | 'none';
};
