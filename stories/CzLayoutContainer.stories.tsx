import {
  AdjustProps,
  AlignProps,
  ChildSizeProps,
  HAlign,
  LayoutType,
  Orientation,
  OrientationProps,
  SizeAdjust,
  SpacingProps,
  VAlign,
} from '@cozka/react-layout/layouts/types';
import { StyleProps } from '@cozka/react-style-props';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import CzLayoutContainer from '../src/CzLayoutContainer';
import _createContainerDecorator from './_createContainerDecorator';

const LAYOUTS: LayoutType[] = [
  'absolute',
  'brick',
  'center',
  'fill',
  'matrix',
  'stack',
];

const ORIENTATIONS: Orientation[] = ['horizontal', 'vertical'];

const H_ALAGNS: HAlign[] = [
  'left',
  'center',
  'right',
  'space-between',
  'space-around',
  'space-evenly',
  'fit',
];

const V_ALAGNS: VAlign[] = [
  'top',
  'middle',
  'bottom',
  'space-between',
  'space-around',
  'space-evenly',
  'fit',
];

const SIZE_ADJUST: SizeAdjust[] = ['none', 'expand', 'narrow'];

const LAYOUT_ARG_TYPES: ArgTypes = {
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

const ADJUST_ARG_TYPES: ArgTypes = {
  vAdjust: {
    control: { type: 'select' },
    options: SIZE_ADJUST,
  },
  hAdjust: {
    control: { type: 'select' },
    options: SIZE_ADJUST,
  },
};

const CHILD_SIZE_ARG_TYPES: ArgTypes = {
  vSize: { type: 'number' },
  hSize: { type: 'number' },
};

const SPACING_ARG_TYPES: ArgTypes = {
  spacing: { type: 'number' },
  hSpacing: { type: 'number' },
  vSpacing: { type: 'number' },
};

const CHILD_COUNT_ARG_TYPES: ArgTypes = {
  hCount: { type: 'number' },
  vCount: { type: 'number' },
};

const GRID_TEMPLATE_ARG_TYPES: ArgTypes = {
  hTemplate: { type: 'string' },
  vTemplate: { type: 'string' },
};

const CONTAINER_ARG_TYPES: ArgTypes = {
  xHeight: { type: 'number' },
  xWidth: { type: 'number' },
};

const ARG_TYPES: ArgTypes = {
  ...LAYOUT_ARG_TYPES,
  ...ORIENTATION_ARG_TYPES,
  ...ALIGN_ARG_TYPES,
  ...ADJUST_ARG_TYPES,
  ...CHILD_SIZE_ARG_TYPES,
  ...SPACING_ARG_TYPES,
  ...CHILD_COUNT_ARG_TYPES,
  ...GRID_TEMPLATE_ARG_TYPES,
  ...CONTAINER_ARG_TYPES,
};

const LAYOUT_PROPS = {
  scroll: true,
  childStyle: undefined,
};

const ADJUST_PROPS: AdjustProps = {
  vAdjust: 'none',
  hAdjust: 'none',
};

const ALIGN_PROPS: AlignProps = {
  vAlign: 'top',
  hAlign: 'left',
};

const CHILD_SIZE_PROPS: ChildSizeProps = {
  vSize: 80,
  hSize: 160,
};

const ORIENTATION_PROPS: OrientationProps = {
  orientation: 'horizontal',
};

const SPACING_PROPS: SpacingProps = {
  spacing: 8,
  vSpacing: undefined,
  hSpacing: undefined,
};

const MATRIX_PROPS = {
  hCount: 4,
  vCount: 3,
  hTemplate: undefined,
  vTemplate: undefined,
};

const CONTAINER_PROPS: StyleProps = {
  xHeight: 400,
  xWidth: 600,
  xPadding: 0,
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CzLayoutContainer',
  component: CzLayoutContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator({ style: { backgroundColor: '#eee' } }),
} satisfies Meta<typeof CzLayoutContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  argTypes: ARG_TYPES,
  args: {
    layout: 'stack',
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...MATRIX_PROPS,
    ...LAYOUT_PROPS,
    scroll: false,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
  parameters: {
    randSize: true,
  },
};

export const NoSize: Story = {
  argTypes: ARG_TYPES,
  args: {
    layout: 'stack',
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...MATRIX_PROPS,
    ...LAYOUT_PROPS,
    scroll: false,
    ...CONTAINER_PROPS,
  },
  parameters: {
    randSize: true,
    randPos: true,
  },
};

export const Absolute: Story = {
  argTypes: {
    ...LAYOUT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  args: {
    layout: 'absolute',
    ...LAYOUT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
};

export const Brick: Story = {
  argTypes: {
    ...ORIENTATION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...LAYOUT_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  args: {
    layout: 'brick',
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...SPACING_PROPS,
    ...LAYOUT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
};

export const Center: Story = {
  argTypes: {
    ...ORIENTATION_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...LAYOUT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  args: {
    layout: 'center',
    ...ORIENTATION_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...LAYOUT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
};

export const Fill: Story = {
  argTypes: {
    ...ORIENTATION_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...LAYOUT_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  args: {
    layout: 'fill',
    ...ORIENTATION_PROPS,
    ...SPACING_PROPS,
    ...LAYOUT_PROPS,
    ...CONTAINER_PROPS,
  },
};

export const Matrix: Story = {
  argTypes: {
    ...ORIENTATION_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...GRID_TEMPLATE_ARG_TYPES,
    ...LAYOUT_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  args: {
    layout: 'matrix',
    ...ORIENTATION_PROPS,
    ...SPACING_PROPS,
    ...MATRIX_PROPS,
    ...LAYOUT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
};

export const Stack: Story = {
  argTypes: ARG_TYPES,
  args: {
    layout: 'stack',
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...LAYOUT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
};
