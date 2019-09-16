import axios from "axios";
import {
  LOAD_CARS_FAILURE,
  LOAD_CARS_SUCCESS,
  LOAD_CARS_PENDING,
  ADD_CAR_FAILURE,
  ADD_CAR_SUCCESS,
  ADD_CAR_PENDING,
  DELETE_CAR_FAILURE,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_PENDING,
  EDIT_CAR_FAILURE,
  EDIT_CAR_SUCCESS,
  EDIT_CAR_PENDING
} from "../Constants";

export const getCars = () => {
  return dispatch => {
    dispatch({
      type: LOAD_CARS_PENDING
    });
    axios
      .get("http://localhost:8082/api/stealership/cars")
      .then(res => {
        dispatch({
          type: LOAD_CARS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_CARS_FAILURE,
          payload: err
        })
      );
  };
};

export const addCar = car => {
  return dispatch => {
    dispatch({
      type: ADD_CAR_PENDING
    });
    axios
      .post("http://localhost:8082/api/stealership/cars", car)
      .then(res => {
        dispatch({
          type: ADD_CAR_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_CAR_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvCar = id => {
  return dispatch => {
    dispatch({
      type: DELETE_CAR_PENDING
    });
    axios
      .delete(`http://localhost:8082/api/stealership/cars/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_CAR_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_CAR_FAILURE,
          payload: err
        })
      );
  };
};

export const editCar = (car, id) => dispatch => {
  dispatch({
    type: EDIT_CAR_PENDING
  });
  axios
    .patch(`http://localhost:8082/api/stealership/cars/${id}`, car)
    .then(res => {
      dispatch({
        type: EDIT_CAR_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_CAR_FAILURE,
        payload: err
      })
    );
};
