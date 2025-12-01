import { Button } from "@mui/material";

function Pagination({ page, onPageChange }) {

  function next() {
    onPageChange(page + 1);
  }

  function back() {
    onPageChange(Math.max(1, page - 1));
  }
  return (
    <>
      <Button onClick={back}>Back</Button>
      <Button onClick={next}>Next</Button>
    </>
  )
}

export default Pagination;
