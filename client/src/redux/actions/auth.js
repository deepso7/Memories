import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signup = (FormData, history) => async (dispatch) => {
  try {
    // log in the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (FormData, history) => async (dispatch) => {
  try {
    // log in the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
