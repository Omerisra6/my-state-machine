import { Box, Typography } from "@mui/material";
import { StepBox } from "./step-box.tsx";
import { steps, useMachine } from "../machine.ts";

export default function Project() {
	const project = useMachine( state => state.project );
	return (
		<Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
			<Typography variant="h4" sx={{ height: '8%', fontWeight: 'bold', padding: '1% 0' }}>
				{ project.title }
			</Typography>
			<Box sx={{ width: '100%', height: '90%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
				{steps.map( ( step ) => {
					return <StepBox key={ step } step={ step } />
				})}
			</Box>
		</Box>
	);
}

