import { Suspense } from "react";
import "./App.css";
import StudentData from "./component/StudentData";
import axios from "axios";

const studentsDataPromise = axios.get("studentsData.json");
console.log(studentsDataPromise);

function App() {
  return (
    <>
      <h1>Axios Chart Data Processing</h1>
      <p>
        Sometimes rendering from server side data, some complex data found e.g
        in object array some key contains multiple object data. Now we will
        process this type of data in this module.
      </p>
      <Suspense fallback={<h3>Chart Data is loading . . . </h3>}>
        <StudentData studentsDataPromise={studentsDataPromise}></StudentData>
      </Suspense>
    </>
  );
}

export default App;
