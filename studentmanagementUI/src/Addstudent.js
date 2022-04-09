import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function AddStudent() {
  const [updateDta, setUpdataDta] = useState({
    userName: "",
    userPlace: "",
    userSalary: "",
    userJob: "",
    std_id: 0,
  });
  const [postData, setPostData] = useState({});
  const handleChange = (e) => {
    var myObj = { ...updateDta, [e.target.id]: e.target.value };
    setUpdataDta(myObj);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    setPostData(updateDta);

    axios
      .post("http://localhost:3002/student/addStudent", postData)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="std_data">Id</label>
          {/* <input
            type="text"
            id="std_id"
            value={updateDta.std_data}
            onChange={handleChange}
          /> */}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="userName"
            value={updateDta.name_}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="userPlace"
            value={updateDta.place}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            id="userSalary"
            value={updateDta.salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="job">job</label>
          <input
            type="text"
            id="userJob"
            value={updateDta.job}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleUpdate}>Add Student!!</button>
      </form>
    </div>
  );
}

export default AddStudent;
