import {
	Box,
	Card,
	CardContent,
	TextField,
	Typography,
	List,
	ListItem,
	Paper,
	InputAdornment,
	IconButton,
	Divider,
	ListItemText
} from "@mui/material";
import { useRef } from "react";
import SendIcon from '@mui/icons-material/Send';

type TicketProps = {
	title: string;
	description: string;
	textareaLabel: string;
	onTextareaChange: (value: string) => void;
	onInputSubmit: (value: string) => void;
	items: string[];
	listTitle: string;
};

export const Ticket = ({ title, description, items, onTextareaChange, textareaLabel, onInputSubmit, listTitle }: TicketProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleTextareaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		onTextareaChange(value);
	}

	const handleSubmit = () => {
		const value = inputRef.current?.value;

		if (!value) {
			return;
		}

		onInputSubmit(value);
		inputRef.current.value = ''; // Clear the input field after submission
	};

	const handleIconClick = () => {
		handleSubmit();
	};

	return (
		<Card sx={{ margin: '10px', padding: '10px' }}>
			<CardContent>
				<Typography variant="h6">{title}</Typography>
				<TextField
					multiline
					value={description}
					label={textareaLabel}
					variant="outlined"
					onChange={handleTextareaChange}
					fullWidth
					sx={{ marginBottom: '10px' }}
				/>
				<Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px' }}>
					<TextField
						inputRef={inputRef}
						label="Add Comment"
						variant="outlined"
						fullWidth
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleIconClick} color="primary">
										<SendIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
						InputLabelProps={ { shrink: true } }

					/>
				</Paper>
				<List sx={{ maxHeight: '200px', overflow: 'auto' }}>
					<ListItemText sx={  { color: (theme) => theme.palette.secondary.main } } >{listTitle}</ListItemText>
					{items.map((item, index) => (
						<Box key={index}>
							<ListItem alignItems="flex-start">
								<ListItemText
									primary={item}
									primaryTypographyProps={{ variant: 'body2' }}
								/>
							</ListItem>
							{index < items.length - 1 && <Divider variant="middle" />}
						</Box>
					))}
				</List>
			</CardContent>
		</Card>
	);
};

