import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import './App.css';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard >
        <CommentDetails date="Today @ 2.55pm" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails date="Yesterday @ 5:00am" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails date=" 2days ago @ 3:33am" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
