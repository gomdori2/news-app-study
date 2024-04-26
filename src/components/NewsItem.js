import styled from "@emotion/styled";
import React from "react";

const NewsItemStyle = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  .thumbnail {
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h2 {
      margin: 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      white-space: nomal;
    }
  }
`;
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;
  return (
    <NewsItemStyle>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="blank" rel="noopener noreferrer">
            <img src={urlToImage} />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="blank" rel="noopener noreferrer">
            {title}
            {/* Lorem ipsum dolor sit amet consectetur. Dictum eu donec elementum
            nibh nisi congue ultrices lobortis. */}
          </a>
        </h2>
        <p>
          {description}
          {/* Lorem ipsum dolor sit amet consectetur. Rhoncus ac mattis vel semper
          eu justo aliquam. Eleifend velit ullamcorper non ut scelerisque
          cursus. Tellus gravida pellentesque neque neque cum integer aliquam. */}
        </p>
        <p>{publishedAt}</p>
      </div>
    </NewsItemStyle>
  );
};

export default NewsItem;
