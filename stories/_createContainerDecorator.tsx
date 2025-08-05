import { Decorator } from '@storybook/react';
import chroma from 'chroma-js';
import CzDiv from '../src/CzDiv';

function _random(scale: number) {
  const value = Math.random();
  return Math.floor(value * scale);
}

function _fromNumericStrings(obj: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const key in obj) {
    const value = obj[key];
    result[key] = _fromNumericString(value);
  }
  return result;
}

function _fromNumericString(value: any) {
  if (_isNumericString(value)) {
    return Number(value);
  }
  return value || undefined;
}

function _isNumericString(value: any) {
  return value != null && value !== '' && !isNaN(Number(value));
}

export default function _createContainerDecorator(
  options: {
    defaultProps?: Record<string, any>;
    defaultChildProps?: Record<string, any>;
    ENABLED_ARGS?: Record<string, Record<string, boolean>>;
  } = {},
): Decorator {
  const { defaultProps = {}, defaultChildProps = {} } = options;

  return (Story, configs: any) => {
    const { args, parameters } = configs;
    const { randSize, randPos, defaultLayout } = parameters;
    const { layout = defaultLayout, children = 12, ...rest } = args;
    const colors = chroma
      .scale(['d9ed92', '184e77'])
      .colors(children as number);
    const {
      hSize,
      vSize,
      spacing,
      hSpacing,
      vSpacing,
      hCount,
      vCount,
      xHeight,
      xWidth,
      xPadding,
      ...restProps
    } = {
      ...defaultProps,
      ...rest,
    };

    return (
      <Story
        args={{
          layout,
          ...restProps,
          ..._fromNumericStrings({
            hSize,
            vSize,
            spacing,
            hSpacing,
            vSpacing,
            hCount,
            vCount,
            xHeight,
            xWidth,
            xPadding,
          }),
          children: colors.map((color, index) => {
            const childProps = {
              xHeight: 80,
              xWidth: 160,
              style: {
                top: 40 * index,
                left: 40 * index,
                backgroundColor: color,
              },
            };
            if (randSize) {
              childProps.xHeight = _random(100);
              childProps.xWidth = _random(200);
            }
            if (randPos) {
              childProps.style.top = _random(args.xHeight ?? 40);
              childProps.style.left = _random(args.xWidth ?? 40);
            }

            return (
              <CzDiv
                xColor="rgba(0, 0, 0, 0.4)"
                xDisplay="flex"
                xJustifyContent="center"
                xAlignItems="center"
                {...childProps}
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
