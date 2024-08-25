import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
           colors: {
              clifford: "#da373d",
              stokelightblue: "#E1EFFC",
              greenVh: "#1D8C6B",
              grayDescription: "#5F6D7E",
              "gray-mid-description": "#5f6d7e",
              jauneVh: "#CFAE1F",
              blueVh: "#0B85F5",
              bg: "#F6F7F9",
              "base-white": "#fff",
              "stroke-bulto": "#c9dce0",
              "stroke-light-blue": "#e1effc",
              "green-vh": "#1d8c6b",
              "light-gray-bg": "#f6f7f9",
              "light-background-secondary": "#f2f3f5",
              "theme-black": "#000",
              "theme-primary": "#5865f2",
              "red-vh": "#8A262E",
              "light-gray": '#e9ebf0'
            },
            fontFamily: {
              outfit: ["Outfit"],
            },
        },
    },

    plugins: [forms],
};
