import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Project from "./components/project.tsx";
import { Box } from "@mui/material";

const App = () => {
	return (
		<ThemeProvider theme={ theme }>
			<Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<CssBaseline />
				<Project/>
			</Box>
		</ThemeProvider>
	);
};

export default App;
