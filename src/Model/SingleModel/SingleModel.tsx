import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './SingleModel.css';
Modal.setAppElement("#root");

interface ModelProps {
  Id: number,
  BrandId: string,
  Name: string,
  TypeId: number,
  Model? : string
}

const SingleModel:React.FC<ModelProps> = (model) => {
  const [modalToggle, setModalToggle] = useState(false);
  const [modelDetail, setModelDetail] = useState<Array<ModelProps>>([]);

  const handleModelData = (brandId : string, name : string) => {
      axios.get(`http://163.47.115.230:30000/api/overview/modeldata/${brandId}/${name}`, {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    })
    .then(res => {
      setModelDetail(res.data);
    });
    setModalToggle(true);
  }

  return (
    <React.Fragment>
      <div className="col" key={model.Id}>
        <div className="card text-center">
          <div className="card-body">
            <h6 className="card-title">{model.Name}</h6>
            <p className="card-text">{model.BrandId}</p>
            <p className="card-text">{model.TypeId}</p>
            <button onClick={() => handleModelData(model.BrandId, model.Name)} className="btn btn-primary">Get Data</button>
          </div>
        </div>
      </div>

      <Modal isOpen={modalToggle} onRequestClose={() => {setModalToggle(false)}}>
        <div className="container my-4 text-center">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              modelDetail.length === 0 && 
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
            {modelDetail.map(model => (
              <div className="col" key={model.Id}>
                <div className="card text-center">
                  <div className="card-body">
                    <h6 className="card-title">{model.Name}</h6>
                    <p className="card-text">{model.Model}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        <button className="m-3 justify-content-center btn btn-lg btn-danger" onClick={() => {setModalToggle(false)}}>Close</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default SingleModel;