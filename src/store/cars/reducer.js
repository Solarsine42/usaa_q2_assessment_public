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

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARS_PENDING:
      return state;

    case LOAD_CARS_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_CARS_SUCCESS:
      return { ...state, all: action.payload };

    case ADD_CAR_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_CAR_FAILURE:
      return { ...state, err: action.payload };

    case ADD_CAR_PENDING:
      return state;

    case DELETE_CAR_SUCCESS:
      return {
        ...state,
        all: state.all.filter(car => car.id === action.payload.id)
      };

    case DELETE_CAR_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_CAR_PENDING:
      return state;

    case EDIT_CAR_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_CAR_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_CAR_PENDING:
      return state;

    default:
      return state;
  }
};
