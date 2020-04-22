import axios from "axios";

const headers = { Authorization: "Bearer gUqCZANGzJpWNto_P2dr" };

export const ACTIONS = {
  FETCH_DATA: "FETCH_DATA",
  SET_BOOKS: "SET_BOOKS",
  FETCH_QUOTES: "FETCH,QUOTES",
  SET_QUOTES: "SET_QUOTES",
  ERROR_LOADING: "ERROR_LOADING",
};

export const fetchData = () => (dispatch) => {
  dispatch({ type: ACTIONS.FETCH_DATA });
  axios
    .get("https://the-one-api.herokuapp.com/v1/character", { headers })
    .catch((e) => dispatch({ type: ACTIONS.ERROR_LOADING, payload: e }))
    .then((res) => {
      console.log(res);
      return res.data.docs;
    })
    .then((res) =>
      res
        .filter((x) => x.hair) //only semi-major characters have hair color listed
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    )
    .then((res) => dispatch({ type: ACTIONS.SET_BOOKS, payload: res }));
};

export const fetchQuotes = (_id) => (dispatch) => {
  axios
    .get(`https://the-one-api.herokuapp.com/v1/character/${_id}/quote`, { headers })
    .then((res) => {
      console.log(res);
      return res.data.docs;
    })
    .then((res) =>
      dispatch({
        type: ACTIONS.SET_QUOTES,
        payload: {
          _id,
          quotes: res,
        },
      })
    );
};
