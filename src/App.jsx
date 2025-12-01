import './App.css';
import Pagination from './components/Pagination';
import Request from './components/Request';
import { useState } from 'react';

import { Button } from '@mui/material';

function App() {
  const [page, setPage] = useState(1);

  function handlePageChange(newPage) {
    setPage(newPage)
  }
  return (
    <>
      <h1>Página {page}</h1>
      <Request page={page} />
      <Pagination page={page} onPageChange={handlePageChange} />
      <div style={{

        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Button variant='outlined' size='large'>Win!</Button>
        <Button variant='outlined' size='large'>Win!</Button>
      </div>
    </>
  )
}

export default App;
