import type { Ticket as TicketType } from "../types.ts";
import { select, send } from "../machine.ts";
import { Ticket } from "./ui/ticket.tsx";
import { useDrag } from "react-dnd";
import { Box } from "@mui/material";

type TicketProps = {
	ticket: TicketType,
}

export const Task = ({ ticket }: TicketProps) => {
	const handleEditDescription = ( value: string ) => {
		select( ticket.id );
		send( { eventName: 'EDIT_DESCRIPTION', value: value } );
	}

	const handleAddComment = ( comment: string ) => {
		select( ticket.id );
		send( { eventName: 'ADD_COMMENT', value: comment } )
	}

	const [, drag] = useDrag(() => ({
		type: 'ticket',
		item: ticket ,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));


	return (
		<Box ref={drag}>
			<Ticket  title={ ticket.props.title } description={ ticket.props.description } textareaLabel='description' onTextareaChange={ handleEditDescription } items={ ticket.props.comments } listTitle='Comments' onInputSubmit={ handleAddComment }/>
		</Box>
	);
}
