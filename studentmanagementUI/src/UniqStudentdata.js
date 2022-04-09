import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function UiniqStudentData() {
  const [myId, setMyId] = useState(0);
  const [stdId, setStdId] = useState(0);
  const [inqData, setInqData] = useState({});
  const [studentinfo, setStudentinfo] = useState("");
  useEffect(() => {
    axios(`http://localhost:3002/student/${stdId}`).then((res) => {
      setInqData(res.data);
      if (res.data.name_ == undefined) {
        setStudentinfo("No data found with that ID : " + stdId);
        //alert("No data found with that ID" + stdId);
      } else {
        console.log(res.data);

        setStudentinfo(
          res.data.name_ +
            " leaving in " +
            res.data.place +
            ", working as " +
            res.data.job
        );
      }
    });
  }, [stdId]);
  function handleCahnge() {
    // setStdId(e.target.value);
    setStdId(document.getElementById("inputVal").value);
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

      <p> Data : {inqData.title}</p>
      <p>
        {/* {" "}
        {inqData.std_id} {inqData.name_} {inqData.job} {inqData.place}{" "}
        {inqData.salary} */}
        {studentinfo}
      </p>
    </div>
  );
}

export default UiniqStudentData;
