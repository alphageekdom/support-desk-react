import React from 'react';
import { useSelector } from 'react-redux';

const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className='note'
      style={{
        backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#FFFFFF',
        color: note.isStaff ? '#FFFFFF' : '#000000',
      }}
    >
      <h1>
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h1>
      <p>{note.text}</p>
      <div className='note-date'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
    </div>
  );
};

export default NoteItem;
