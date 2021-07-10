const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_COUNT":
			return {
				...state,
				"areas": {
					...state.areas,
					[action.area]: {
						...state["areas"][action.area],
						[action.monster]: action.count
					}
				}
			};
		default:
			return state;
	}
}

export default reducer;
