import React from 'react';

// esta es la forma 'arraow function' de crear el componente y decir que tiene props 
const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">

      {/* le vamos a pasar una propiedad llamada avatar que va a ir en el source, asi que va a ser un string con una url */}
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">

        {/* le ira una prop author */}
          {props.author}
        </a>
        <div className="metadata">

        {/* aqui ira una prop timeAgo */}
          <span className="date">{props.timeAgo}</span>
        </div>
        {/* Aqu'i ira una prop content */}
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

// export
export default CommentDetail;
