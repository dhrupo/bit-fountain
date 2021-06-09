import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TypeProps {
  Id: number,
  Description: string
}

const DeviceModel = () => {
  const [typeId, setTypeId] = useState<Array<TypeProps>>([]);
  useEffect(() => {
    axios.get("http://163.47.115.230:30000/api/devicetype?limit=40&page=1", {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {
        setTypeId(res.data[0]);
      });
  })

  const [typeIdSelect, setTypeIdSelect] = useState(0);
  const [brandId, setBrandId] = useState();
  const [name, setName] = useState();
  const [comment, setComment] = useState();

  const handleTypeIdChange = (event: any) => {
    setTypeIdSelect(parseInt(event.target.value));
  }

  const handleBrandIdChange = (event: any) => {
    setBrandId(event.target.value);
  }

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  }

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  }

  const data = {
    BrandId: brandId,
    Name: name,
    TypeId: typeIdSelect,
    Comment: comment
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post("http://163.47.115.230:30000/api/devicemodel", data, {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    })
      .then(res => {
        alert('Sucessfully Added New Model');
      })
      .catch(error => {
        alert("something wrong happened!")
      })
  }

  return (
    <div className="container w-lg-50">
      <h4 className="text-center mb-3">Add Model</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="type">Type Id</label>
          <select className="form-select" id="type" onChange={handleTypeIdChange} required>
            {typeId?.map(item => (
              <option key={item.Id} value={item.Id}>{item.Description}</option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={handleBrandIdChange} placeholder="Brand Id" required/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={handleNameChange} placeholder="Name" required/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={handleCommentChange} placeholder="Comment" />
        </div>
        <button className="btn btn-primary w-100 mx-auto" type="submit">Add Model</button>
      </form>
    </div>
  );
};

export default DeviceModel;