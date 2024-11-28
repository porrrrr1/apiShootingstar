import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center">
      <h1 className="bg-green-200 text-green-900 text-center text-2xl font-bold py-4 px-8 rounded-lg shadow-md">
        สัปหลาด
      </h1>
      <hr className="border-green-300 my-4 w-1/2" />
      <div className="w-full max-w-4xl space-y-6">
        {data.map((course) => (
          <CourseCard key={course.ch_id} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-white border border-green-300 rounded-lg shadow-md p-4 flex flex-col space-y-3">
      <div className="text-green-800 font-bold text-lg">{props.ch_title}</div>
      <div className="text-green-600 text-sm">เวลารวม: {props.ch_timetotal} นาที</div>
      <div className="text-green-600 text-sm">ยอดวิว: {props.ch_view} ครั้ง</div>
      <div className="mt-3">
        <iframe
          className="w-full rounded-lg border border-green-200"
          height="500"
          src={"https://www.youtube.com/embed/" + props.ch_url}
          title={props.ch_title}
        ></iframe>
      </div>
    </div>
  );
};

export default Chapter;
