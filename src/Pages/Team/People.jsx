import React from 'react'
import  { useState, useEffect } from "react";
import { Query } from "appwrite";
import  {
    databases,
    DATABASE_ID,
    COLLECTION_ID_USERS,
  } from "../../config";
function People() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);
    const getUsers = async () => {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_USERS, [Query.limit(25)]);
        setPeople(response.documents);
        console.log("ressdsd",response.documents);
      };
  return (
    <div>
        <h1>People</h1>
        {people.map((person) => (
        <div key={person.$id}>
          <h2>{person.username}</h2>
          <p>{person.bio}</p>
        </div>
          
))}
    </div>
  )
}

export default People