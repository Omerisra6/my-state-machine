import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0F0F11',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#875AF2',
		},
		background: {
			default: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
		h6: {
			fontWeight: 600,
		},
		button: {
			textTransform: 'none',
		},
	},
});

export default theme;
