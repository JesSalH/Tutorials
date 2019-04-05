import React from 'react';
import ReactDOM from 'react-dom';
// la libreria faker sirve para cojer contenido aleatorio
import faker from 'faker';
// importamos los compomentes que vamos a usar
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    {/* Esto parece ua approvalCard con un div en lugar de un componente */}
    {/* Aunque sea un Div tambien ira dentro del props.children */}
      <ApprovalCard>
        
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
        
      </ApprovalCard>

      <ApprovalCard>
        {/* Ojo que aunque enchufemos el CommentDetail a palo seco dentro de la approvalCard, en realidad ira donde ponga 'props.children' */}
        <CommentDetail
        //esto es una instancia del componente original CommentDetail, y le estamos pasando unos par'ametros fijos
        // en este ejercicio los parametros estan 'hardcoded', en realidad no es asi...
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          // las imageners del avatar la coge de la libreria faker
          // ojo que avatar es una variable que se le pasa al compomente CommentDetail
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};


// ojo que en este caso el componente app esta en esta misma pagina (index.js)
ReactDOM.render(<App />, document.querySelector('#root'));
