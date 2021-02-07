import React from "react";

import "./BlogCard.css";
export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className="blogCard__container">
        <a className="blogCard" href="#blog">
          <h3 className="blogCard__title">{blog.title}</h3>
          <p className="blogCard__desc">{blog.desc}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
