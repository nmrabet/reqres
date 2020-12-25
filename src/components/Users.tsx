import React, { useState, useEffect } from "react";
import { AllUsers, ListUsersResponse } from "../types";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./users.css";

export default function Users() {
  const [, setIsLoading] = useState(true);
  const [users, setUsers] = useState<AllUsers[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((data: ListUsersResponse) => {
          setIsLoading(false);
          setUsers(data.data);
        });
    }, 2000);
  }, []);

  return (
    <div className='list-users'>
      <h1>List of users</h1>
      <div className='users'>
        {users.length > 0 
          ? users.map((user) => (
              <div key={user.id} className='user'>
                <h4>{user.first_name + " " + user.last_name}</h4>
                <h4>{user.email} </h4>
                <Link to={`/users/${user.id}`}>
                  <img src={user.avatar} alt='all users' />
                </Link>
              </div>
            ))
          : [0, 1, 2].map((index) => (
              <div key={index} className='user-skeleton'>
                <Skeleton />
                <Skeleton />
                <Skeleton height={150} />
              </div>
            ))}
      </div>
    </div>
  );
}
