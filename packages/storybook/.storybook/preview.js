import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming'
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from "styled-components";
import { theme } from '@gen-ui/react'

addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: themes.dark
  }
}