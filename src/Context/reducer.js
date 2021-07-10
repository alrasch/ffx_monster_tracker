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
		case "PINCREMENT":
			return {
				...state,
				"test": {
					...state.test,
					pest: {
						...state.test.pest,
						mest: state.test.pest.mest + 1
					}
				}
			}
		default:
			return state;
	}
}

export default reducer;
