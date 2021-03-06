export enum ColorSet {
  black = '58, 58, 58, 1',
  gray100 = '58, 58, 58, 0.1',
  gray200 = '58, 58, 58, 0.2',
  gray300 = '58, 58, 58, 0.3',
  gray400 = '58, 58, 58, 0.4',
  gray500 = '58, 58, 58, 0.5',
  gray600 = '58, 58, 58, 0.6',
  gray700 = '58, 58, 58, 0.7',
  gray800 = '58, 58, 58, 0.8',
  gray900 = '58, 58, 58, 0.9',
  blue = '54, 143, 255, 1',
  mint = '38, 206, 194, 1',
  orange = '255, 150, 35, 1',
  red = '253, 46, 105, 1',
  mediumRed = '255, 33, 60, 1',
  deepRed = '190, 0, 23, 1',
  purple = '151, 95, 254, 1',
  emerald = '11, 208, 153, 1',
  white = '255, 255, 255, 1',
}

export type ColorString = keyof typeof ColorSet

export function getColor(color: ColorString): string {
  return ColorSet[color]
}
