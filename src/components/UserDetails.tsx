import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../types/Users";
import "./userDetails.css";
import Skeleton from "react-loading-skeleton";

export default function UserDetails() {
  const params = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<User | null>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  // AJAX call to get the info about the specified user
  const url = "https://reqres.in/api/users/" + params.userId;

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const userData = data.data;
          console.log(userData);
          setIsLoading(false);
          setUserDetails(userData);
        });
    }, 3000);
  }, [url]);

  console.log(userDetails);
  return (
    <div className='user-details'>
      <h1>User Details</h1>
      <div className='user-details-item'>
        {userDetails ? (
          userDetails && (
            <div key={userDetails.id}>
              <img
                src={userDetails.avatar}
                alt='user'
                className='user-details-img'
              />
              <h4>{userDetails.email}</h4>
              <h3>{userDetails.first_name + " " + userDetails.last_name}</h3>
            </div>
          )
        ) : (
          <div key={1} className='user-details-skeleton'>
            <Skeleton height={120} />
            <Skeleton />
            <Skeleton height={50} />
          </div>
        )}
      </div>
    </div>
  );
}
