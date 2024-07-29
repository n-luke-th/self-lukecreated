import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './themes/LukeCreated-dark.css'





const pages = [
  { id: 1, content: <h1>Page 1 Content</h1> },
  { id: 2, content: <h1>Page 2 Content</h1> },
  { id: 3, content: <h1>Page 3 Content</h1> },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="App">
      <div className="page-content">
        {pages[currentPage].content}
      </div>
      <div className="navigation">
        <button onClick={prevPage} disabled={currentPage === 0} className='dark'>Previous</button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default App;
