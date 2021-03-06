import { NotesPreview } from "./note-preview.jsx";

export function NotesList({ notes, loadNots }) {

    return (
        <div className="nots-list">
            {notes.map((note) => (
                <NotesPreview key={note.id} note={note} loadNots={loadNots} />
            ))}
        </div>
    );
}