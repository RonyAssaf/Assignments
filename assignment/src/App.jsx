import React from "react";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center p-2" style={{ backgroundColor: "#3251D0", color: "white" }}>
      <h3 className="text-lg font-bold">User Management</h3>
      <div className="flex items-center space-x-2">
        <button className="px-4 py-2 rounded bg-white " style={{ color: "#3251D0"}}>
          Create User
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center">
          <span className="material-icons mr-1"></span> Logout
        </button>
        <button className="px-4 py-2 rounded-sm bg-primary-blue text-white hover:cursor-pointer">
            <svg
              width="18" height="18"
              viewBox="0 0 24 24"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className="m-0 p-0"
            >
              <path
                d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </button>
      </div>
    </div>
  );
};
const SearchBar = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search users..."
        className="w-50 p-1 m-1 border border-gray-300 rounded"
      />
    </div>
  );
};


const UserCard = ({ firstName, lastName, email, status, dob, }) => {
  const getInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
      <div className="flex flex-col items-center mb-4 p-3">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3" style={{ backgroundColor: "#3251D0" }}>
          {getInitials(firstName, lastName)}
        </div>
        <div className="text-left w-full">
          <p className="font-bold text-md">{`${firstName} ${lastName}`}</p>
          <p className="text-sm text-gray-600">Email: {email}</p>
          <p className="text-sm text-gray-600">Status: { status === "Active" ? "Active" : "Locked"}</p>
          <p className="text-sm text-gray-600">Date of Birth: { `${dob}`}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-3 mt-auto">
        <button className="w-16 text-white px-3 py-1 rounded" style={{ backgroundColor: "#3251D0" }}>
          Edit
        </button>
        <button className="w-20 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

const UserGrid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const formattedUsers = data.map((user, index) => {
          const randomDate = new Date(
            new Date().setFullYear(
              new Date().getFullYear() - Math.floor(Math.random() * 50 + 18)
            )
          )
            .toISOString()
            .split("T")[0];
            return {
            firstName:  user.name.split(" ")[0],
            lastName: user.name.split(" ")[1] || "",
            email: user.email,
            status: (index % 2 === 0 ? "Active" : "Locked"),
            dob: randomDate,
            };
        });
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user, index) => (
        <UserCard
          key={index}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          status={user.status}
          dob={user.dob}
        />
      ))}
    </div>
  );
};
const App = () => {
  return (
    <div>
      <NavigationBar />
      <SearchBar />
      <UserGrid />
    </div>
  );
};

export default App;
