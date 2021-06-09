import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleModel from './SingleModel/SingleModel';

interface ModelProps {
  Id: number,
  BrandId: string,
  Name: string,
  TypeId: number
}

const Model:React.FC = () => {
  const [models, setModels] = useState<Array<ModelProps>>([]);
  useEffect(() => {
    axios.get("http://163.47.115.230:30000/api/overview/modeltype", {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    })
    .then(res => {
      setModels(res.data.slice(0,30));
    });
  })

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          models.length === 0 && 
          <div className="mx-auto">
            <div className="spinner-grow mx-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mx-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mx-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        {models.map(model => (
          <SingleModel key={model.Id} Id = {model.Id} TypeId = {model.TypeId} Name = {model.Name} BrandId = {model.BrandId}></SingleModel>
          ))}
      </div>
    </div>
  );
};

export default Model;