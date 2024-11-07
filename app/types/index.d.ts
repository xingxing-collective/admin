import type { HSL, HSV, RGBA } from '@ctrl/tinycolor';
import type { Avatar, Badge, Chip, Tooltip, Link as ULink } from '#ui/types';

export type NestedKeyOf<ObjectType extends Record<string, any>> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends Record<string, any>
  ? NestedKeyOf<ObjectType[Key]>
  : Key;
}[keyof ObjectType];

export type ButtonColor =
  | 'green'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'primary'
  | 'white'
  | 'gray'
  | 'black';
export type ButtonVariant =
  | 'outline'
  | 'soft'
  | NestedKeyOf<{
    white: {
      solid: string;
      ghost: string;
    };
    gray: {
      solid: string;
      ghost: string;
      link: string;
    };
    black: {
      solid: string;
      link: string;
    };
  }>;

export interface UIPresets {
  [key: string]: Record<
    string,
    {
      color: ButtonColor;
      variant: ButtonVariant;
    }
  >;
}

export interface Link extends ULink {
  label: string;
  class?: string;
  click?: () => void;
}

export interface AsideLink extends Link {
  id: string | number;
  labelClass?: string;
  icon?: string;
  iconClass?: string;
  avatar?: Avatar;
  avatarClass?: string;
  chip?: string | Chip;
  chipClass?: string;
  badge?: string | number | Badge;
  tooltip?: Tooltip;
  defaultOpen?: boolean;
  // Only applicable to links with children
  draggable?: boolean;
  collapsible?: boolean;
  children?: AsideLink[];
}


export type { ColorInput } from '@ctrl/tinycolor';
export interface Payload {
  a: number;
  hex: string;
  hex8: string;
  hsl: HSL;
  hsv: HSV;
  oldHue: number;
  rgba: RGBA;
  source: 'rgba' | 'hsl' | 'hex' | 'hsv' | 'hsva';
}


export type UserStatus = 'subscribed' | 'unsubscribed' | 'bounced'

export interface User {
  id: number
  name: string
  email: string
  avatar?: Avatar
  status: UserStatus
  location: string
}

export interface DataRecord {
  x: number; y: number
}