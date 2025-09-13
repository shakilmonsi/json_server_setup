// App.jsx
import React, { useEffect } from "react";
import {
  getData,
  postData,
  updateData,
  deleteData,
} from "../utils/axiosInstance";

const Testing = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getData("users");
    console.log("All users:", users);
  };

  const createUser = async () => {
    const newUser = { name: "Hasib", email: "hasib@example.com" };
    const res = await postData("users", newUser);
    console.log("User Created:", res);
  };

  const editUser = async () => {
    const updated = await updateData("users", 1, {
      name: "Hasib Updated",
    });
    console.log("User Updated:", updated);
  };

  const removeUser = async () => {
    const deleted = await deleteData("users", 2);
    console.log("User Deleted:", deleted);
  };

  return (
    <div>
      <h1>CRUD Test</h1>
      <button onClick={createUser}>Add</button>
      <button onClick={editUser}>Update</button>
      <button onClick={removeUser}>Delete</button>
    </div>
  );
};

export default Testing;
