import './index.css';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'
import { App } from './App';

const data = [
  { label: 'AWS', rating: 0.87 },
  { label: 'Systems', rating: 0.87 },
  { label: 'Architecture', rating: 0.87 },
  { label: 'SysOps', rating: 0.88 },
  { label: 'DevOps', rating: 0.88 },
  { label: 'Linux', rating: 0.89 },
  { label: 'Google Cloud', rating: 0.88 },
  { label: 'React', rating: 0.94 },
  { label: 'Front-end', rating: 1 },
  { label: 'Back-end', rating: 1 },
  { label: 'Next.js', rating: 0.94 },
  { label: 'Full stack', rating: 1 },
  { label: 'HTML', rating: 1 },
  { label: 'CSS', rating: 1 },
  { label: 'JavaScript', rating: 0.93 },
  { label: 'TypeScript', rating: 0.88 },
  { label: 'PHP', rating: 0.93 },
  { label: 'Java', rating: 0.79 },
  { label: 'Scala', rating: 0.83 },
  { label: 'Ruby', rating: 0.81 },
  { label: 'Python', rating: 0.82 },
  { label: 'Data Engineering', rating: 0.85 },
  { label: 'Terraform', rating: 0.82 },
  { label: 'k8s', rating: 0.79 },
  { label: 'MLOps', rating: 0.79 },
  { label: 'WebGL', rating: 0.93 },
  { label: 'D3', rating: 0.92 },
];

createRoot(document.getElementById('root') as Element).render(<App skills={data} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
