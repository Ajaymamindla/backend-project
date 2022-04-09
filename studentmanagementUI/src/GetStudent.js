import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function GetStudentData() {
  const [stdData, setStdData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3002/student").then((res) => setStdData(res.data));
  }, [stdData]);
  
  
        return (
          <div>
           <table className="table table-bordered  text-light bg-primary">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Place</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {stdData.map((ele,ind) => {
                  return (
                    <tr key={ind} className="text-center">
                      <td>{ele.std_id}</td>
                      <td>{ele.name_}</td>
                      <td>{ele.job}</td>
                      <td>{ele.place}</td>
                      <td>{ele.salary}</td>
                    </tr>
                 
                 );
                })}
              </tbody>
            </table>
          </div>
        );
      

   

}

export default GetStudentData;
