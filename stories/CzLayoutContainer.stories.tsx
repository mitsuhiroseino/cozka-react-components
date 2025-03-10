import {
  ChildSizing,
  HAlign,
  LayoutType,
  Orientation,
  VAlign,
} from '@cozka/react-layout/layouts/types';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import chroma from 'chroma-js';
import CzDiv from '../src/CzDiv';
import CzLayoutContainer from '../src/CzLayoutContainer';

const LAYOUTS: LayoutType[] = [
  'absolute',
  'center',
  'fit',
  'horizontal',
  'liquid',
  'matrix',
  'solid',
  'vertical',
];

const ORIENTATIONS: Orientation[] = ['horizontal', 'vertical'];

const H_ALAGNS: HAlign[] = [
  'left',
  'center',
  'right',
  'space-between',
  'space-around',
  'space-evenly',
];

const V_ALAGNS: VAlign[] = [
  'top',
  'middle',
  'bottom',
  'space-between',
  'space-around',
  'space-evenly',
];

const CHILD_SIZINGS: ChildSizing[] = ['none', 'fit', 'expand', 'narrow'];

const ARG_TYPES_BASE: ArgTypes = {
  layout: {
    control: { type: 'select' },
    options: LAYOUTS,
  },
  scroll: { type: 'boolean' },
};

const ORIENTATION_ARG_TYPES: ArgTypes = {
  orientation: {
    control: { type: 'select' },
    options: ORIENTATIONS,
  },
};

const ALIGN_ARG_TYPES: ArgTypes = {
  hAlign: {
    control: { type: 'select' },
    options: H_ALAGNS,
  },
  vAlign: {
    control: { type: 'select' },
    options: V_ALAGNS,
  },
};

const CHILDSIZE_ARG_TYPES: ArgTypes = {
  childHeight: { type: 'string' },
  childWidth: { type: 'string' },
  childHeightSizing: { control: { type: 'select' }, options: CHILD_SIZINGS },
  childWidthSizing: { control: { type: 'select' }, options: CHILD_SIZINGS },
};

const SPACING_ARG_TYPES: ArgTypes = {
  spacing: { type: 'number' },
  hSpacing: { type: 'number' },
  vSpacing: { type: 'number' },
};

const HORIZONTAL_ARG_TYPES: ArgTypes = {
  wrapChildren: { type: 'boolean' },
};

const VERTICAL_ARG_TYPES: ArgTypes = {
  wrapChildren: { type: 'boolean' },
};

const LIQUID_ARG_TYPES: ArgTypes = {
  childMinHeight: { type: 'string' },
  childMinWidth: { type: 'string' },
};

const MATRIX_ARG_TYPES: ArgTypes = {
  hCount: { type: 'number' },
  vCount: { type: 'number' },
  hTemplate: { type: 'string' },
  vTemplate: { type: 'string' },
};

const CONTAINER_ARG_TYPES: ArgTypes = {
  xHeight: { type: 'number' },
  xWidth: { type: 'number' },
};

const ARG_TYPES: ArgTypes = {
  ...ARG_TYPES_BASE,
  ...ORIENTATION_ARG_TYPES,
  ...ALIGN_ARG_TYPES,
  ...CHILDSIZE_ARG_TYPES,
  ...SPACING_ARG_TYPES,
  ...HORIZONTAL_ARG_TYPES,
  ...VERTICAL_ARG_TYPES,
  ...LIQUID_ARG_TYPES,
  ...MATRIX_ARG_TYPES,
  ...CONTAINER_ARG_TYPES,
};

const Container = (props: any) => {
  const colors = chroma.scale(['d9ed92', '184e77']).colors(12);
  return (
    <CzLayoutContainer {...props} xBackgroundColor="#eee">
      {colors.map((color, index) => (
        <CzDiv
          xHeight={80}
          xWidth={160}
          xTop={40 * index}
          xLeft={40 * index}
          xColor={chroma(color).luminance() > 0.5 ? '#333' : '#ccc'}
          xBackgroundColor={color}
          xDisplay="flex"
          xJustifyContent="center"
          xAlignItems="center"
        >
          {index + 1}
        </CzDiv>
      ))}
    </CzLayoutContainer>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CzLayoutContainer',
  component: Container,
  tags: ['layout'],
} satisfies Meta<typeof CzLayoutContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  argTypes: ARG_TYPES,
  args: {
    layout: 'horizontal',
    xHeight: 400,
    xWidth: 600,
  },
};
