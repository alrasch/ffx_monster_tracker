import React from 'react';

import initialState from "./initialState";
import reducer from "./reducer";

const MainContext = React.createContext();

function MainContextProvider(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = { state, dispatch };

	return (
		<MainContext.Provider value={value}>{props.children}</MainContext.Provider>
	)
}

const MainContextConsumer = MainContext.Consumer;

export { MainContext, MainContextProvider, MainContextConsumer }
