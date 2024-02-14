import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./actions";
import { saveNotes, loadNotes } from "./notesReducer";

function App() {
  const notes = useSelector((state) => state.notes);

  const ObjectToArray = (object) => {
    const array = [];
    object.forEach((value) => {
      array.push(value);
    });
    return array;
  };

  const array = ObjectToArray(notes);

  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  const onSave = () => {
    dispatch(saveNotes());
  };

  const onLoad = () => {
    dispatch(loadNotes());

    ObjectToArray(notes);
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <div>
        {array.map((item, i) => {
          return (
            <ul key={item.id}>
              <li scope="row">{item.id}</li>
              <li>{item.nombre}</li>
              <li>{item.apellido}</li>
              <li>{item.usuario}</li>
              <li>{item.email}</li>
            </ul>
          );
        })}
      </div>

      <hr />
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
    </>
  );
}

export default App;
