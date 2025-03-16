import { Decorator } from '@storybook/react';
import chroma from 'chroma-js';
import CzDiv from '../src/CzDiv';

function _random(scale: number) {
  const value = Math.random();
  return Math.floor(value * scale);
}

export default function _createContainerDecorator(
  defaultProps?: Record<string, any>,
  defaultChildProps?: Record<string, any>,
): Decorator {
  return (Story, { args, parameters }: any) => {
    const { children = 12, randSize, randPos } = parameters;
    const colors = chroma.scale(['d9ed92', '184e77']).colors(children);
    const props = {
      ...defaultProps,
      ...args,
    };

    return (
      <Story
        args={{
          ...props,
          children: colors.map((color, index) => {
            const props = {
              xHeight: 80,
              xWidth: 160,
              style: {
                top: 40 * index,
                left: 40 * index,
                backgroundColor: color,
              },
            };
            if (randSize) {
              props.xHeight = _random(100);
              props.xWidth = _random(200);
            }
            if (randPos) {
              props.style.top = _random(args.xHeight ?? 40);
              props.style.left = _random(args.xWidth ?? 40);
            }

            return (
              <CzDiv
                xColor="rgba(0, 0, 0, 0.4)"
                xDisplay="flex"
                xJustifyContent="center"
                xAlignItems="center"
                {...props}
                {...defaultChildProps}
              >
                {index + 1}
              </CzDiv>
            );
          }),
        }}
      />
    );
  };
}
