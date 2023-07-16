import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

function Courses() {
  const courses = [
    {
      courseName: "HTML/CSS",
      id: 1,
      icons: AiFillHtml5,
    },
    {
      courseName: "JavaScript",
      id: 2,
      icons: SiJavascript,
    },
    {
      courseName: "React.js",
      id: 3,
      icons: FaReact,
    },
    {
      courseName: "Node.js",
      id: 4,
      icons: FaNodeJs,
    },
    {
      courseName: "MongoDB",
      id: 5,
      icons: SiMongodb,
    },
    {
      courseName: "Python",
      id: 6,
      icons: FaPython,
    },
  ];
  return (
    <div className="course-con">
      {courses.map((value) => {
        return (
          <div key={value.id} className="course">
            <span>
              <value.icons />
            </span>
            <h2>{value.courseName}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
