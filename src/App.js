import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./actions";
import { saveNotes, loadNotes } from "./notesReducer";

function App() {
  const notes = useSelector((state) => state.notes);

  const array = [];

  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  const onSave = () => {
    dispatch(saveNotes());
  };

  const onLoad = () => {
    dispatch(loadNotes());
    if (notes) {
      notes.forEach((value) => {
        array.push(value);
      });
      console.log(array);
    }
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <div>
        {array.map((item, i) => {
          return (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.usuario}</td>
              <td>{item.email}</td>
            </tr>
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
