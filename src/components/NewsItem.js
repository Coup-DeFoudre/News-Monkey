import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, publishedAt, author, source } =
    props;
  return (
    <div>
      <div className="card h-96 relative" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 start-64 translate-middle badge rounded-pill bg-danger z-50">
          {source ? source : "Unknown"}
        </span>
        <div className="relative">
          <span className="absolute z-50 bottom-0 left-0 px-1.5 py-1 w-full rounded-r text-[#A8FF35] font- text-sm backdrop-brightness-50 backdrop-blur-sm">
            {" "}
            {author ? "By : " + author : "Author Unknown"} <br /> On{" "}
            {new Date(publishedAt).toGMTString()}
          </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-8-770x433.jpg"
            }
            className="card-img-top h-44"
            alt="..."
          />
        </div>

        <div className="card-body">
          <h2 className="card-title font-semibold text-lg">{title}...</h2>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm bg-[#68FE9A] hover:bg-[#68FE9A] font-medium mt-2 absolute bottom-2"
          >
            Read More{" >>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
