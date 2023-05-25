import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../UI/header";
import Footer from "../UI/footer";
import UserCard from "./UserCard";
import CardWithTabs from "./CardWithTabs";
import axios from "axios";

import "./Profile.css";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isAdmin = user?.position === "admin"; // use optional chaining to avoid errors
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate(); // Add useNavigate hook to handle navigation

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://limitless-ce6c.onrender.com/user",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
      setIsLoading(false);
    }

    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin, setError]);

  const handleDeleteUser = async (userId) => {
    console.log(userId);
    try {
      const response = await axios.delete(
        `https://limitless-ce6c.onrender.com/user/${userId}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      // Filter out the deleted user from the state
      setUsers(users.filter((user) => user.userId !== userId));
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized");
      } else {
        setError("There was an error deleting the user.");
      }
    }
  };

  const handleAddClass = () => {
    navigate("/Addclass");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error loading the data.</p>;
  }

  if (isAdmin === true) {
    return (
      <>
        <div className="page-container">
          <div className="profilePage">
            <Header />
            <div className="user-card-and-tabs">
              <UserCard />
              <CardWithTabs />
            </div>

            <div className="table-wrapper">
              <div className="table-row">
                <div className="table-cell">Name</div>
                <div className="table-cell">Email</div>
                <div className="table-cell">Position</div>
                <div className="table-cell">Actions</div>
              </div>
              {users.length > 0 &&
                  users.map(
                      (user) =>
                          // Add a condition to exclude users with the admin position
                          user.position !== "admin" && (
                              <div className="table-row" key={user._id}>
                                <div className="table-cell">{user.firstName}</div>
                                <div className="table-cell">{user.emailAddr}</div>
                                <div className="table-cell">{user.position}</div>
                                <div className="table-cell">
                                  <button
                                      className="profileBtnClass"
                                      onClick={() => handleDeleteUser(user._id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                          )
                  )}
            </div>
            <div className="button-container">
              <button className="big-button" onClick={handleAddClass}>
                Add Class
              </button>
              <button className="big-button edit-button" onClick={handleAddClass}>
                Edit Class
              </button>
              <button
                  className="big-button delete-button"
                  onClick={handleAddClass}
              >
                Delete Class
              </button>
            </div>
          </div>
          <Footer />
        </div>

      </>
    );
  }

  return (
    <>
      <Header />

      <div className="user-card-and-tabs">
        <UserCard />
        <CardWithTabs />
      </div>
    </>
  );
};

export default Profile;
