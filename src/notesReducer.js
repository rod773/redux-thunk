import { ADD_NOTE, setNotes, SET_NOTES } from "./actions";
import axios from "axios";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }
    default:
      return state;
  }
};

export const saveNotes = () => async (dispatch, getState) => {
  const notes = getState().notes;
  await fetch("http://localhost:4000/notes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(notes),
  });
  alert("Success");
};

export const loadNotes = () => async (dispatch, getState) => {
  const url = "http://localhost:8080/index.php/wp-json/trabajadores/v1/todos";

  const config = {
    url: url,
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const notes = await axios(config).then((res) => res.data);

  dispatch(setNotes(notes));
};
