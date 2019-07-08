
import { SET_ERROR } from "./types";

export const setError = () => dispatch => {
    dispatch({
        type: SET_ERROR
      });
};
