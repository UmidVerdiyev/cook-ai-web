import { orangeRedTheme } from './orange-red';
import { bluePurpleTheme } from './blue-purple';
import { greenTealTheme } from './green-teal';

export const themes = {
    'orange-red': orangeRedTheme,
    'blue-purple': bluePurpleTheme,
    'green-teal': greenTealTheme,
};

export type ThemeName = keyof typeof themes;
export type ColorTheme = typeof orangeRedTheme;

// Default theme
export const defaultTheme = orangeRedTheme;