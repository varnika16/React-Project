import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme(

	{
		typography: {
			fontFamily: ['Poppins', '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',].join(','),
			button: {
				textTransform: 'none',
			},
		},
	}
);

export default function ThemeProvider(props) {
	const { children } = props;

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
