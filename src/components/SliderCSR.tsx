'use client';

import { ReactNode } from 'react';
import Slider from 'react-slick';

import { settingsSlider } from '@/helpers';

export const SliderCSR = ({ children }: { children: ReactNode }) => {
  return <Slider {...settingsSlider}>{children}</Slider>;
};
