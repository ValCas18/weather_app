export const SET_QUERY = "SET_QUERY";

export const GET_WEATHER = "GET_WEATHER";

export const RESET_STATE = "RESET_STATE";

export const setQuery = (payload) => ({
	type: SET_QUERY,
	payload,
});

export const resetState = (payload) => ({
	type: RESET_STATE,
	payload,
});

export const getWeather = () => {
	return async (dispatch, getState) => {
		try {
			const city = getState().city.query;
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edbcf3d5f073c29e84fdb738c61b9c2b`
			);
			if (response.ok) {
				let weather = await response.json();
				dispatch({
					type: GET_WEATHER,
					payload: weather,
				});
				console.log("meteo:", weather);
			} else {
				console.log("errore 1");
			}
		} catch (error) {
			console.log("errore 2");
		}
	};
};
