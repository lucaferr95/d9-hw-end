export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const FETCH_JOB = "FETCH_JOB";
export const FETCH_JOB_ERROR = "FETCH_JOB_ERROR";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const addToFavouriteAction = (companyName) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: companyName,
  };
};

export const removeFromFavouriteAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  };
};

export const fetchJobActions = (companyName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_JOB,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_JOB_ERROR, // salvare gli errori in Redux!
      });
    }
  };
};
