import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateStudent() {
  const [stdObj, setStudentObj] = useState({});
  const [newStdObj, setNewStudentObj] = useState({});
  const [stdId, setStdId] = useState(0);

  useEffect(() => {
    axios
      .put(`http://localhost:3002/student/updateStudent/${stdId}`, stdObj)
      .then((res) => console.log(res.data));
  }, [newStdObj]);

  useEffect(() => {
    axios(`http://localhost:3002/student/${stdId}`).then((res) => {
      setStudentObj(res.data);
      if (res.data.name_ == undefined) {
        // setStudentinfo("No data found with that ID : " + stdId);
        //alert("No data found with that ID" + stdId);
      } else {
        console.log(res.data);

      }
    });
  }, [stdId]);

  function handleCahnge() {
    // setStdId(e.target.value);
    setStdId(document.getElementById("inputVal").value);
  }

  function handleUpdate(s) {
    setNewStudentObj(s.target.value);
    // axios
    //   .put(`http://localhost:3002/student/updateStudent/${stdId}`, stdObj)
    //   .then((res) => console.log(res.data));
  }
  return (
    <div>
      <h1 className="bg-primary"> Student Id: {stdId}</h1>

      <div className="container">
        <input type="text" id="inputVal" />
        <button className="btn btn-warning" onClick={handleCahnge}>
          Get Details
        </button>
      </div>

      <input type="text" readOnly value={stdObj.std_id}></input>
      <input type="text" value={stdObj.name_} onChange={handleUpdate}></input>
      <input type="text" value={stdObj.place} onChange={handleUpdate}></input>
      <input type="text" value={stdObj.job} onChange={handleUpdate}></input>
      <input type="text" value={stdObj.salary} onChange={handleUpdate}></input>
      <button onClick={handleUpdate} className="btn btn-primary mx-auto">
        UPDATE STUDENT!
      </button>
    </div>
  );
}
