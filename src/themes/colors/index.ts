import { orangeRedTheme } from './orange-red';
import { bluePurpleTheme } from './blue-purple';
import { greenTealTheme } from './green-teal';
import {blueTechTheme} from "./blue-tech";

export const themes = {
    'orange-red': orangeRedTheme,
    'blue-purple': bluePurpleTheme,
    'green-teal': greenTealTheme,
    'blue-tech' : blueTechTheme
};

export type ThemeName = keyof typeof themes;
export type ColorTheme = typeof orangeRedTheme;

// Default theme
export const defaultTheme = orangeRedTheme;