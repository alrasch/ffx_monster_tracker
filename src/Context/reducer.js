const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_COUNT":
			return {
				...state,
				[action.area]: {
					...state[action.area],
					[action.monster]: action.count
				}
			};
		case "MAX_COUNT":
			return {
				...state,
				[action.area]: {
					...state[action.area],
					[action.monster]: 10
				}
			}
		default:
			return state;
	}
}

export default reducer;
