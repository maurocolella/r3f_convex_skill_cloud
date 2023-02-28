import './index.css';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'
import { App } from './App';

const data = [
  { label: 'AWS', rating: 0.87 },
  { label: 'React', rating: 0.94 },
  { label: 'Front-end', rating: 1 },
  { label: 'Back-end', rating: 1 },
  { label: 'Full stack', rating: 1 },
  { label: 'JavaScript', rating: 0.93 },
  { label: 'Java', rating: 0.78 },
  { label: 'Ruby', rating: 0.77 },
  { label: 'Python', rating: 0.82 },
];

createRoot(document.getElementById('root') as Element).render(<App skills={data} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
