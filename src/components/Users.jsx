import { useState } from "react";
import { users } from "../utils/data.js";
import UsersCard from "./UsersCard.jsx";

const Users = () => {
  const [userList, setUserList] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value); 

 
    const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(value.toLowerCase())
    );
    setUserList(filteredUsers);  
  };

  return (
    <>
      <h1>Users</h1>
      <hr />
      <input
        type="text"
        placeholder="Search by email"
        className="form-control my-3"
        value={searchTerm}
        onChange={handleSearch}  
      />

      {userList.length === 0 ? (
        <div className="text-center">
          <p>No users found</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {userList.map((user) => (
            <div className="col" key={user.id}>
              <UsersCard data={user} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
