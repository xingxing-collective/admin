import type { HSL, HSV, RGBA } from '@ctrl/tinycolor';

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
