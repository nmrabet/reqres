import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllResources, ListResourcesResponse } from "../types/index";


export default function ResourceDetails() {
  const [resourceDetail, setResourceDetails] = useState<AllResources | null>();
  const params = useParams<{ resourceId: string }>();

  const url = "https://reqres.in/api/unknown/" + params.resourceId;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setResourceDetails(data.data);
      });
  }, [url]);
  return <div>
      {resourceDetail && (
          <div className='resource-details'>
              <h1>{resourceDetail.name}</h1>
              <div className='square-details' style={{backgroundColor: `${resourceDetail.color}`}}></div>
              <h2>{resourceDetail.pantone_value}</h2>
          </div>
      )}
  </div>;
}
