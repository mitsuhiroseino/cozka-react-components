import { Decorator } from '@storybook/react';
import chroma from 'chroma-js';
import { useCallback, useMemo } from 'react';
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
    const { randSize, randPos, defaultLayout, defaultSize } = parameters;
    const { layout = defaultLayout, childCount = 12, ...rest } = args;
    const colors = chroma.scale(['d9ed92', '184e77']).colors(childCount);
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
    const sizeProps = useMemo(() => {
      if (randSize) {
        return Array.from({ length: childCount }).map(() => ({
          xHeight: _random(100),
          xWidth: _random(200),
        }));
      } else {
        return Array.from({ length: childCount }).map(() => ({
          xHeight: 80,
          xWidth: 160,
        }));
      }
    }, [randSize, childCount]);
    const positionProps = useMemo(() => {
      if (randPos) {
        return Array.from({ length: childCount }).map(() => ({
          top: _random(defaultSize.height ?? 40),
          left: _random(defaultSize.width ?? 40),
        }));
      } else {
        return Array.from({ length: childCount }).map((item, index) => ({
          top: 40 * index,
          left: 40 * index,
        }));
      }
    }, [randPos, childCount, defaultSize]);

    return (
      <Story
        args={{
          layout,
          defaultSize,
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
              ...sizeProps[index],
              style: {
                ...positionProps[index],
                backgroundColor: color,
              },
            };

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
