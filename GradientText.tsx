import React, { useState } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

type StopDef = { offset: string | number; color: string; opacity?: number };
type Theme = {
  stops: StopDef[];
  cx?: string;
  cy?: string;
  r?: string;
  fx?: string;
  fy?: string;
};

const THEMES: Record<string, Theme> = {
  default: {
    stops: [
      { offset: '0%', color: '#ff7ac4' },
      { offset: '20%', color: '#d9b3ff' },
      { offset: '40%', color: '#a6c8ff' },
      { offset: '60%', color: '#98e7de' },
      { offset: '78%', color: '#ffe59a' },
      { offset: '100%', color: '#ffb577' },
    ],
    cx: '55%',
    cy: '22%',
    r: '120%',
    fx: '55%',
    fy: '26%',
  },
  purple: {
    stops: [
      { offset: '0%', color: '#8FB3FF' },
      { offset: '25%', color: '#A996FF' },
      { offset: '55%', color: '#B28AFF' },
      { offset: '80%', color: '#CCA0FF' },
      { offset: '100%', color: '#E2B8FF' },
    ],
    cx: '42%',
    cy: '24%',
    r: '88%',
  },
  teal: {
    stops: [
      { offset: '0%', color: '#B9F3FF' },
      { offset: '20%', color: '#7BE7D4' },
      { offset: '45%', color: '#3FD9C4' },
      { offset: '70%', color: '#48E7D1' },
      { offset: '100%', color: '#DDF9D2' },
    ],
    cx: '46%',
    cy: '26%',
    r: '86%',
  },
  blue: {
    stops: [
      { offset: '0%', color: '#A5C8FF' },
      { offset: '40%', color: '#5FA9FF' },
      { offset: '100%', color: '#2563EB' },
    ],
    cx: '45%',
    cy: '25%',
    r: '85%',
  },
  red: {
    stops: [
      { offset: '0%', color: '#FF9AAE' },
      { offset: '30%', color: '#FF4D6D' },
      { offset: '65%', color: '#E11D48' },
      { offset: '100%', color: '#FF6A2B' },
    ],
    cx: '42%',
    cy: '24%',
    r: '88%',
  },
  green: {
    stops: [
      { offset: '0%', color: '#C8FACC' },
      { offset: '30%', color: '#86EFAC' },
      { offset: '60%', color: '#34D399' },
      { offset: '100%', color: '#65A30D' },
    ],
    cx: '45%',
    cy: '25%',
    r: '85%',
  },
  orange: {
    stops: [
      { offset: '0%', color: '#FFD1A6' },
      { offset: '50%', color: '#FFA24C' },
      { offset: '100%', color: '#FF7A59' },
    ],
    cx: '45%',
    cy: '25%',
    r: '85%',
  },
};

const NAME_MAP: Record<string, keyof typeof THEMES> = {
  default: 'default',
  classic: 'default',
  original: 'default',
  purple: 'purple',
  violet: 'purple',
  magenta: 'purple',
  teal: 'teal',
  cyan: 'teal',
  blue: 'blue',
  azure: 'blue',
  red: 'red',
  crimson: 'red',
  green: 'green',
  emerald: 'green',
  orange: 'orange',
  sunset: 'orange',
};

function pickTheme(name?: string): Theme {
  if (!name) return THEMES.default;
  const key = NAME_MAP[name.trim().toLowerCase()] ?? 'default';
  return THEMES[key];
}

export type GradientTextProps = {
  text: string;
  textClassName?: string;
  gradientColor?: string;
  numberOfLines?: number;
  containerClassName?: string;
};

export default function GradientText({
  text,
  textClassName,
  gradientColor = 'default',
  numberOfLines,
  containerClassName,
}: GradientTextProps) {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const theme = pickTheme(gradientColor);

  const onMeasure = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: width, h: height });
  };

  return (
    <View className={containerClassName} style={{ alignSelf: 'flex-start' }}>
      <Text
        className={textClassName}
        style={{ opacity: 0, includeFontPadding: false }}
        numberOfLines={numberOfLines}
        onLayout={onMeasure}>
        {text}
      </Text>
      
      {size && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: size.w,
            height: size.h,
          }}
          pointerEvents="none">
          <MaskedView
            style={{ width: size.w, height: size.h }}
            maskElement={
              <Text className={textClassName} numberOfLines={numberOfLines}>
                {text}
              </Text>
            }>
            <Svg width={size.w} height={size.h} viewBox="0 0 100 100" preserveAspectRatio="none">
              <Defs>
                <RadialGradient
                  id="g"
                  cx={theme.cx ?? '45%'}
                  cy={theme.cy ?? '25%'}
                  r={theme.r ?? '85%'}
                  fx={theme.fx ?? theme.cx ?? '45%'}
                  fy={theme.fy ?? theme.cy ?? '25%'}>
                  {theme.stops.map((s: StopDef, i: number) => (
                    <Stop
                      key={i}
                      offset={typeof s.offset === 'number' ? `${s.offset}%` : s.offset}
                      stopColor={s.color}
                      stopOpacity={s.opacity ?? 1}
                    />
                  ))}
                </RadialGradient>
              </Defs>
              <Rect x="0" y="0" width="100" height="100" fill="url(#g)" />
            </Svg>
          </MaskedView>
        </View>
      )}
    </View>
  );
}
