import React, { useState, useEffect } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { API } from "aws-amplify";

export default function NewsPage() {
    
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect called");
    async function onLoad() {
  
      try {
        console.log("fetching notes...")
        const notes = await loadNotes();
        setNotes(notes);
        console.log("Notes from DB: ", notes);
      } catch (e) {
        //TODO
        console.log(e.response);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  });
  
  function loadNotes() {
    return API.get("notes", "/notes", {
        headers: {
          "Access-Control-Allow-Origin": true
        },
    });
  }

  function renderNotesList(notes: dbNote[]) {
    return (notes).map((note, i) => (
        <MDBContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <MDBListGroupItem header={note.content.trim().split("\n")[0]}>
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </MDBListGroupItem>
        </MDBContainer>
      )
    );
  }

  function renderNotes() {
    return (
      <div>
        <h1>Your Notes</h1>
        <MDBListGroup>
          {!isLoading && renderNotesList(notes)}
        </MDBListGroup>
      </div>
    );
  }

  return (
    <div>
      {renderNotes()}
    </div>
  );
}

interface dbNote {
  userId: string,
  noteId: string,
  createdAt: string,
  content: string,
}