import { UseSkeletonOptions } from './types';

export default function useSkeleton(options: UseSkeletonOptions = {}) {
  const { variant = 'rounded', animation = 'pulse' } = options;

  return {
    variant,
    animation,
  };
}
