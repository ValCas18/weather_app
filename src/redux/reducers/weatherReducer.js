import { GET_WEATHER, SET_QUERY } from "../actions";

const initialState = {
	query: "",
	weather: {},
};

export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_QUERY:
			return {
				...state,
				query: action.payload,
			};
		case GET_WEATHER:
			return {
				...state,
				weather: action.payload,
			};
		default:
			return state;
	}
};
