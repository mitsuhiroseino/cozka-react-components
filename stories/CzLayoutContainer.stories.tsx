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
} from '@cozka/react-layout/layouts';
import layout from '@cozka/react-layout/layouts/absolute';
import { StyleProps } from '@cozka/react-style-props';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import CzLayoutContainer from '../src/CzLayoutContainer';
import _createContainerDecorator from './_createContainerDecorator';

const LAYOUTS: LayoutType[] = [
  'absolute',
  'balance',
  'brick',
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
  vSize: {
    type: 'string',
  },
  hSize: {
    type: 'string',
  },
};

const SPACING_ARG_TYPES: ArgTypes = {
  spacing: {
    type: 'string',
  },
  hSpacing: {
    type: 'string',
  },
  vSpacing: {
    type: 'string',
  },
};

const CHILD_COUNT_ARG_TYPES: ArgTypes = {
  hCount: {
    type: 'string',
  },
  vCount: {
    type: 'string',
  },
};

const GRID_TEMPLATE_ARG_TYPES: ArgTypes = {
  hTemplate: {
    type: 'string',
  },
  vTemplate: {
    type: 'string',
  },
};

const CONTAINER_ARG_TYPES: ArgTypes = {
  xHeight: { type: 'string' },
  xWidth: { type: 'string' },
};

const ARG_TYPES = {
  all: {
    ...LAYOUT_ARG_TYPES,
    ...ORIENTATION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
    ...GRID_TEMPLATE_ARG_TYPES,
  },
  absolute: {
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  balance: {
    ...ORIENTATION_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  brick: {
    ...ORIENTATION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  fill: {
    ...ORIENTATION_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  matrix: {
    ...ORIENTATION_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...GRID_TEMPLATE_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
  stack: {
    ...ORIENTATION_ARG_TYPES,
    ...ALIGN_ARG_TYPES,
    ...ADJUST_ARG_TYPES,
    ...CHILD_SIZE_ARG_TYPES,
    ...SPACING_ARG_TYPES,
    ...CHILD_COUNT_ARG_TYPES,
    ...CONTAINER_ARG_TYPES,
  },
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
  vSize: '80',
  hSize: '160',
};

const ORIENTATION_PROPS: OrientationProps = {
  orientation: 'horizontal',
};

const SPACING_PROPS: SpacingProps = {
  spacing: '8',
  vSpacing: undefined,
  hSpacing: undefined,
};

const CHILD_COUNT_PROPS: any = {
  hCount: '4',
  vCount: '3',
};

const GRID_TEMPLATE_PROPS = {
  hTemplate: undefined,
  vTemplate: undefined,
};

const CONTAINER_PROPS: StyleProps = {
  xHeight: '400',
  xWidth: '400',
  xPadding: '0',
};

const ARGS: Record<string, Record<string, any>> = {
  all: {
    ...LAYOUT_PROPS,
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...GRID_TEMPLATE_PROPS,
    ...CHILD_COUNT_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
  absolute: {
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
  balance: {
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
  brick: {
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...SPACING_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
  fill: {
    ...ORIENTATION_PROPS,
    ...SPACING_PROPS,
    ...CONTAINER_PROPS,
  },
  matrix: {
    ...ORIENTATION_PROPS,
    ...CHILD_COUNT_PROPS,
    ...GRID_TEMPLATE_PROPS,
    ...SPACING_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
  stack: {
    ...ORIENTATION_PROPS,
    ...ALIGN_PROPS,
    ...ADJUST_PROPS,
    ...SPACING_PROPS,
    ...CHILD_SIZE_PROPS,
    ...CONTAINER_PROPS,
  },
};

const ENABLED_ARGS: Record<string, Record<string, any>> = {};
for (const layout in ARGS) {
  ENABLED_ARGS[layout] = {};
  for (const arg in ARGS[layout]) {
    ENABLED_ARGS[layout][arg] = true;
  }
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CzLayoutContainer',
  component: CzLayoutContainer,
  tags: ['layout'],
  decorators: _createContainerDecorator({
    defaultProps: {
      style: { backgroundColor: 'rgba(128, 128, 128, 0.1)' },
    },
    ENABLED_ARGS,
  }),
} satisfies Meta<typeof CzLayoutContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  argTypes: ARG_TYPES.all,
  args: {
    layout: 'stack',
    ...ARGS.all,
    children: 12,
  },
  parameters: {
    randSize: true,
  },
};

export const NoSize: Story = {
  argTypes: ARG_TYPES.all,
  args: {
    layout: 'stack',
    ...ARGS.all,
    children: 12,
  },
  parameters: {
    randSize: true,
    randPos: true,
  },
};
export const Absolute: Story = {
  argTypes: ARG_TYPES.absolute,
  args: {
    ...ARGS.absolute,
    children: 12,
  },
  parameters: {
    defaultLayout: 'absolute',
  },
};

export const Balance: Story = {
  argTypes: ARG_TYPES.balance,
  args: {
    ...ARGS.balance,
    children: 12,
  },
  parameters: {
    defaultLayout: 'balance',
  },
};

export const Brick: Story = {
  argTypes: ARG_TYPES.brick,
  args: {
    ...ARGS.brick,
    children: 12,
  },
  parameters: {
    defaultLayout: 'brick',
  },
};

export const Fill: Story = {
  argTypes: ARG_TYPES.fill,
  args: {
    ...ARGS.fill,
    children: 12,
  },
  parameters: {
    defaultLayout: 'fill',
  },
};

export const Matrix: Story = {
  argTypes: ARG_TYPES.matrix,
  args: {
    ...ARGS.matrix,
    children: 12,
  },
  parameters: {
    defaultLayout: 'matrix',
  },
};

export const Stack: Story = {
  argTypes: ARG_TYPES.stack,
  args: {
    ...ARGS.stack,
    children: 12,
  },
  parameters: {
    defaultLayout: 'stack',
  },
};
