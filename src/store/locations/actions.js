import axios from "axios";
import {
  LOAD_LOCATIONS_FAILURE,
  LOAD_LOCATIONS_SUCCESS,
  LOAD_LOCATIONS_PENDING,
  ADD_LOCATION_FAILURE,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_PENDING,
  DELETE_LOCATION_FAILURE,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_PENDING,
  EDIT_LOCATION_FAILURE,
  EDIT_LOCATION_SUCCESS,
  EDIT_LOCATION_PENDING
} from "../Constants";

export const getLocations = () => {
  return dispatch => {
    dispatch({
      type: LOAD_LOCATIONS_PENDING
    });
    axios
      .get("http://localhost:8082/api/stealership/locations")
      .then(res => {
        dispatch({
          type: LOAD_LOCATIONS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_LOCATIONS_FAILURE,
          payload: err
        })
      );
  };
};

export const addLoc = loc => {
  return dispatch => {
    dispatch({
      type: ADD_LOCATION_PENDING
    });
    axios
      .post("http://localhost:8082/api/stealership/locations", loc)
      .then(res => {
        dispatch({
          type: ADD_LOCATION_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_LOCATION_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvLoc = id => {
  return dispatch => {
    dispatch({
      type: DELETE_LOCATION_PENDING
    });
    axios
      .delete(`http://localhost:8082/api/stealership/locations/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_LOCATION_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_LOCATION_FAILURE,
          payload: err
        })
      );
  };
};

export const editLoc = (loc, id) => dispatch => {
  dispatch({
    type: EDIT_LOCATION_PENDING
  });
  axios
    .patch(`http://localhost:8082/api/stealership/locations/${id}`, loc)
    .then(res => {
      dispatch({
        type: EDIT_LOCATION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_LOCATION_FAILURE,
        payload: err
      })
    );
};
