import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";
import GetStudent from "./GetStudent";
import AddStudent from "./Addstudent";
import UiniqStudentData from "./UniqStudentdata";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="students">Get All Students!</Link>
        <Link to="uniqstudent">Get Specific Student!</Link>
        <Link to="addstudent">Add Students details!</Link>
        <Link to="updatestudent">Add Students details!</Link>
        <Routes>
          <Route path="/students" element={<GetStudent />}></Route>
          <Route path="/addstudent" element={<AddStudent />}></Route>
          {/* <Route path='/getstudent' element={<GetStudent/>}></Route> */}
          <Route path="/uniqstudent" element={<UiniqStudentData />}></Route>
          <Route path="/updatestudent" element={<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
