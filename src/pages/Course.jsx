import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;

    setData(data_format);
  };

  useEffect(() => {
    callApi();
    console.log(data);
  }, []);
  return (
    <>
      <h1>สัปหลาด</h1>
      <hr />
      {data.map((course) => (
        <CourseCard key={course.id} {...course} />
        // <div key={course.title}>{course.title}</div>
      ))}
    </>
  );
};


const CourseCard = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: 20, marginBottom: 10 }}>
      <div>
        <img src={props.picture} alt="" style={{ width: 100 }} />
      </div>
      <div>{props.title}</div>
      <div>{props.detail}</div>
      <div>
        <NavLink to={"/course/"+props.id}>เนื้อหาเพิ่มเติม</NavLink>
      </div>
    </div>
  );
};

export default Course;
