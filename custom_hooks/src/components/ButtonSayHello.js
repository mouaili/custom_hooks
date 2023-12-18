import React, { useState } from 'react';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

function ButtonSayHello() {
  const [text, setText] = useState('');

  //Custom Hook
  useUpdateDocTitle(text);

  return (
    <div className="col">
      <p>{text}</p>
      <hr />
      <button className="btn btn-info" onClick={() => setText('Hello world..')}>
        Cliquez ici
      </button>
    </div>
  );
}

export default ButtonSayHello;
