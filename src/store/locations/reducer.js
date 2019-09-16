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

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOCATIONS_PENDING:
      return state;

    case LOAD_LOCATIONS_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_LOCATIONS_SUCCESS:
      return { ...state, all: action.payload };

    case ADD_LOCATION_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_LOCATION_FAILURE:
      return { ...state, err: action.payload };

    case ADD_LOCATION_PENDING:
      return state;

    case DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        all: state.all.filter(loc => loc.id === action.payload.id)
      };

    case DELETE_LOCATION_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_LOCATION_PENDING:
      return state;

    case EDIT_LOCATION_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_LOCATION_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_LOCATION_PENDING:
      return state;

    default:
      return state;
  }
};
