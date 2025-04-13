import React, { use } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const StudentData = ({ studentsDataPromise }) => {
  const studentsDataRes = use(studentsDataPromise);
  console.log(studentsDataRes);

  const studentsData = studentsDataRes.data;
  console.log(studentsData);

  const studentsMarks = studentsData.map((student) => {
    const marks = {
      //! Here, convert the complex data to normal array of object
      name: student.name,
      chemistry: student.subjects.chemistry,
      ict: student.subjects.ict,
      math: student.subjects.math,
    };
    // ! Sometimes it needs to calculate the total or average marks to show in a chart. So calculated the marks or avg marks and set in the marks as object key,value
    const avg = (marks.chemistry + marks.ict + marks.math) / 2;
    marks.avg = avg;
    return marks;
  });
  console.log(studentsMarks);

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie data={studentsMarks} dataKey="avg" fill="#8884d8"></Pie>

        <Tooltip></Tooltip>
      </PieChart>

      <PieChart width={400} height={400}>
        <Pie data={studentsMarks} dataKey="chemistry" fill="#8884d8"></Pie>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default StudentData;
