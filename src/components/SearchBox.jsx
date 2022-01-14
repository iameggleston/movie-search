import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieProviders';

export default function SearchBox() {
  const [text, setText] = useState('');
  const { searchTitle } = useContext(MovieContext);

  const submit = (e) => {
    e.preventDefault();
    searchTitle(text);
    setText('');
  };

  return (
    <form onSubmit={submit}>
      <input
        type='text'
        value={text}
        placeholder='映画名を入力して下さい。'
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>検索する</button>
    </form>
  );
}
