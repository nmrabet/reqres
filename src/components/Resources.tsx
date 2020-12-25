import React, { useState, useEffect } from "react";
import { AllResources, ListUsersResponse } from "../types/index";
import "./resources.css";

export default function Resources() {
  const [resources, setResources] = useState<AllResources[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then((res) => res.json())
      .then((data: ListUsersResponse) => {
        setResources(data.data);
      });
  }, []);

  console.log(resources);
  return (
    <div className='resources'>
      <div className='resources-list'>
        {resources.map((resource) => {
          return (
            <div key={resource.id} className='resources-item'>
              <h3>{resource.name}</h3>
              <div
                className='square'
                style={{ backgroundColor: `${resource.color}` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
