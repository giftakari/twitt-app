import React from 'react';
import faker from 'faker';

const CommentDetails =()=>{
  const firstName =faker.name.findName();
  const lastName= faker.name.lastName();
  
return(
<div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
           <a href="/" className ="author">
            {firstName} {lastName}
           </a>
           <div className ="metadata">
             <span className="date">Nice Post</span>
            </div>
          
           <div className="text">{faker.lorem.sentence()}</div>

        </div>

      </div>
);
}

export default CommentDetails;
