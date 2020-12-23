import React, { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import { useFireStore } from "../utils/Firebase";

import {
  Wrapper,
  Fetched,
  Div,
  Text,
  Disc,
  Delete
} from "../styles/Display.element";

const Display = ({ docus }) => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [sockets, setSockets] = useState([]);

  const pullData = async () => {
    return await useFireStore
      .collection(`${currentUser.uid}`)
      .doc("socket")
      .collection(`${docus}`)
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        data.length === 0 ? setError("no notes yet") : setError("");
        setSockets(data);
      });
  };

  useEffect(() => {
    // we use pull effect to ovoid memory leak
    pullData();
  }, []);

  return (
    <>
      <Wrapper>
        {sockets.map((socket, index) => {
          return (
            <Fetched key={index}>
              <Div>
                <Text>{socket.noteName}</Text>
                <Disc>{socket.contentNote}</Disc>
              </Div>

              <Delete
                onClick={() => {
                  useFireStore
                    .collection(`${currentUser.uid}`)
                    .doc("socket")
                    .collection(`${docus}`)
                    .doc(`${socket.id}`)
                    .delete();
                }}
              />
            </Fetched>
          );
        })}
        {error && <p>{error}</p>}
      </Wrapper>
    </>
  );
};

export default Display;
