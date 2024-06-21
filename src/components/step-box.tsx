import { Box, Typography } from "@mui/material";
import { Task } from "./task.tsx";
import { select, send, useMachine } from "../machine.ts";
import { useDrop } from "react-dnd";
import { Ticket } from "../types.ts";

type StepBoxProps = {
	step: string,
}

export const StepBox = ( { step }: StepBoxProps ) => {
	const tickets = useMachine(state => state.items )
	const stepTickets = tickets.filter( ticket => ticket.status === step );

	const [, drop] = useDrop(() => ({
		accept: 'ticket',
		drop: (item: Ticket) => {
			const action = stepToAction( step );

			if ( !action ) {
				return;
			}

			select( item.id );

			send( { eventName: action } );
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	}));

	return (
		<Box ref={ drop } sx={{ flexBasis: 0, flexGrow: 1, margin: '0 10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f5f5f5', height: '90%' }}>
			<Typography variant="h6" sx={{ padding: '5%', backgroundColor: ( theme ) => theme.palette.secondary.main , color: ( theme ) => theme.palette.primary.contrastText, borderRadius: '4px 4px 0 0' }}>
				{ step }
			</Typography>
			<Box sx={ { height: '90%', overflowY: 'scroll',  } }>
				{ stepTickets.map( ( ticket) => (
					<Task key={ ticket.id } ticket={ ticket } />
				) ) }
			</Box>
		</Box>
	);
}

function stepToAction( step: string ) {
	switch ( step ) {
		case 'todo':
			return 'TODO';
		case 'in-progress':
			return 'START';
		case 'pending-review':
			return 'READY_FOR_REVIEW';
		case 'review-comments':
			return 'REVIEW_COMMENTS';
		case 'done':
			return 'APPROVE';
	}
}
