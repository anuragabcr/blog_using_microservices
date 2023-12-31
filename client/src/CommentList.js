import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = Object.values(comments).map((comment) => {
    let content;
    if (comment.status === "approved") content = comment.content;
    if (comment.status === "pending")
      content = comment.content + "(Under Review)";
    if (comment.status === "rejected") return "";

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
