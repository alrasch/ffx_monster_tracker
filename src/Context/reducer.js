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
		default:
			return state;
	}
}

export default reducer;
