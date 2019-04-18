import React from "react";
import faker from "faker";

const CommentDetails = props => {
  const firstName = faker.name.firstName;
  const lastName = faker.name.lastName;

  const text = faker.lorem.sentence;

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {firstName()} {lastName()}
        </a>
        <div className="metadata">
          <span className="date">{props.data}</span>
        </div>

        <div className="text">{text()}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
