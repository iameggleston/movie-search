import React, { useContext } from 'react';
import { MovieContext } from './MovieProviders';
import ReactLoading from 'react-loading';

export default function SearcResult() {
  const { results, isLoading } = useContext(MovieContext);

  if (isLoading)
    return <ReactLoading type='spin' color='#000' height='50px' width='50px' className='mx-auto' />;
  if (!results || !results.length) return <div>No cards.</div>;
  return (
    <ul>
      {results.map(({ Title, Poster }, i) => (
        <li key={i}>
          <h1>{Title}</h1>
          <img src={Poster} alt={Title} />
        </li>
      ))}
    </ul>
  );
}
