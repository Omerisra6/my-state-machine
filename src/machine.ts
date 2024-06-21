import createMachine from "./utils/state-machine/state-machine.ts";

export const steps = [ 'todo', 'in-progress', 'pending-review', 'review-comments', 'done' ];

export const { send, useMachine, select } = createMachine({
	initialContext: {
		selected: 1,
		items: [
			{
				id: 1,
				status: 'todo',
				props: {
					title: 'Task 1',
					description: 'Description of task 1',
					comments: [ 'Comment 1', 'Comment 2']
				}
			},
			{
				id: 2,
				status: 'in-progress',
				props: {
					title: 'Task 2',
					description: 'Description of task 2',
					comments: []
				}
			},
			{
				id: 3,
				status: 'pending-review',
				props: {
					title: 'Task 3',
					description: 'Description of task 3',
					comments: []
				}
			},
			{
				id: 4,
				status: 'review-comments',
				props: {
					title: 'Task 4',
					description: 'Description of task 4',
					comments: []
				}
			},
			{
				id: 5,
				status: 'done',
				props: {
					title: 'Task 5',
					description: 'Description of task 5',
					comments: []
				}
			}
		],
		project: {
			id: 1,
			title: 'Project 1',
			description: 'Description of project 1',
			tickets: [1, 2, 3, 4, 5],
		}
	},
	states: {
		todo: {
			TODO: ( context) => {
				return context;
			},
			START: 'in-progress',
			READY_FOR_REVIEW: 'pending-review',
			REVIEW_COMMENTS:  ( context) => {
				return context;
			},
			APPROVE: ( context) => {
				return context;
			},
			EDIT_DESCRIPTION: ( context, newValue: string ) => {
				return {
					...context,
					props: {
						...context.props,
						description: newValue,
					}
				}
			},
			ADD_COMMENT: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						comments:[  ...state.props.comments, newValue ]
					}
				}
			}
		},
		'in-progress': {
			TODO: 'todo',
			START: ( context) => {
				return context;
			},
			READY_FOR_REVIEW: 'pending-review',
			REVIEW_COMMENTS: ( context) => {
				return context;
			},
			APPROVE: ( context) => {
				return context;
			},
			EDIT_DESCRIPTION: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						description: newValue,
					}
				}
			},
			ADD_COMMENT: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						comments:[  ...state.props.comments, newValue ]
					}
				}
			}
		},
		'pending-review': {
			TODO: ( context) => {
				return context;
			},
			START:  ( context) => {
				return context;
			},
			READY_FOR_REVIEW:  ( context) => {
				return context;
			},
			REVIEW_COMMENTS: 'review-comments',
			APPROVE: 'done',
			EDIT_DESCRIPTION: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						description: newValue,
					}
				}
			},
			ADD_COMMENT: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						comments:[  ...state.props.comments, newValue ]
					}
				}
			}
		},
		'review-comments': {
			TODO: ( context) => {
				return context;
			},
			START:  ( context) => {
				return context;
			},
			READY_FOR_REVIEW: 'pending-review',
			REVIEW_COMMENTS: ( context) => {
				return context;
			},
			APPROVE: ( context) => {
				return context;
			},
			ADD_COMMENT: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						comments:[  ...state.props.comments, newValue ]
					}
				}
			},
			EDIT_DESCRIPTION: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						description: newValue,
					}
				}
			},
		},
		done: {
			TODO: ( context) => {
				return context;
			},
			START: ( context) => {
				return context;
			},
			READY_FOR_REVIEW: ( context) => {
				return context;
			},
			REVIEW_COMMENTS: ( context) => {
				return context;
			},
			APPROVE: ( context) => {
				return context;
			},
			EDIT_DESCRIPTION: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						description: newValue,
					}
				}
			},
			ADD_COMMENT: ( state, newValue: string ) => {
				return {
					...state,
					props: {
						...state.props,
						comments:[  ...state.props.comments, newValue ]
					}
				}
			}
		},
	},
});
