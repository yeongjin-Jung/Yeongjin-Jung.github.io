import React, { useState, useEffect } from "react";

import "./Projects.css";
import { myProject } from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function Projects() {
  // 카테고리 개수 구하기
  const arr = new Array(myProject.projects.length);
  const result = new Array(myProject.category.length);
  result.fill(0);
  result[0] = arr.length;
  {
    myProject.projects.map((project, i) => {
      if (project.tag === "Vue") {
        result[1]++;
      } else if (project.tag === "React") {
        result[2]++;
      }
    });
  }

  const [categoryValue, setCategoryValue] = useState("All");
  const onChangeCategory = (e) => {
    setCategoryValue(e.category);
  };

  return (
    <div className="projects__main">
      <h1 className="proejcts__text">{myProject.title}</h1>
      <div className="projects__categories">
        {myProject.category.map((category, i) => {
          return (
            <button
              className="category__btn"
              key={i}
              data-filter={category}
              onClick={() => onChangeCategory({ category })}
            >
              <p className="category__btn__name">{category}</p>

              <span className="category__btn__cnt">{result[i]}</span>
            </button>
          );
        })}
      </div>

      <div className="projects__cardList">
        {myProject.projects.map((project, i) => {
          if (categoryValue == "All") {
            return <ProjectCard project={project} key={i}></ProjectCard>;
          } else if (categoryValue == "Vue" && project.tag == categoryValue) {
            return <ProjectCard project={project} key={i}></ProjectCard>;
          } else if (categoryValue == "React" && project.tag == categoryValue) {
            return <ProjectCard project={project} key={i}></ProjectCard>;
          }
        })}
      </div>
    </div>
  );
}
