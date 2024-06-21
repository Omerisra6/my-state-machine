export type Project = {
	id: number,
	title: string,
	description: string,
	tickets: number[],
}

export type Ticket = {
	id: number,
	status: string,
	props: {
		title: string,
		description: string,
		comments: string[]
	}
}

