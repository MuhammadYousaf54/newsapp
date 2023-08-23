import React from "react";

const NewsItem = (props)=>{
//
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",
                       justifyContent:"flex-end",
                       position:"absolute",
                       right:"0"
                        }}>
          <span class=" badge rounded-pill bg-danger" style={{left : '90%',zIndex: '1'}}>{source}
               </span>
               </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {author} On {new Date(publishedAt).toDateString()}{" "}
              </small>
            </p> <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
