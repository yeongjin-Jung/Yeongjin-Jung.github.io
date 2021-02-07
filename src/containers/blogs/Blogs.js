import React from "react";
import { Fade } from "react-reveal";
import BlogCard from "../../components/blogCard/BlogCard";

import "./Blogs.css";
import { blogs } from "../../portfolio";

export default function Blogs() {
  return (
    <Fade bottom duraction={1000} distance="20px">
      <div id="blog">
        <div className="blog__container">
          <h1 className="blog__text">{blogs.title}</h1>
          <h2 className="blog__subtitle">{blogs.subtitle}</h2>
          <div className="blog__cardList">
            {blogs.blog.map((blog) => {
              return <BlogCard blog={blog}></BlogCard>;
            })}
          </div>
        </div>
        <div className="blog__img">
          <img src={blogs.image} alt="blog image"></img>
        </div>
      </div>
    </Fade>
  );
}
