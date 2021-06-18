import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const DayCells = ({ days, deleteDay, takeId }) => {
  console.log(days)
  const renderRows = days.map(({type,description,id},index) => <TableRow key={index}>
    <TableCell >{type}</TableCell>
    <TableCell >{description}</TableCell>
    <TableCell>
      <Button
        onClick={() =>takeId(id)}
        variant="contained"
        color="primary"
      >Upload</Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>deleteDay(id)}
        startIcon={<DeleteIcon />}
      >Delete</Button>
    </TableCell>
  </TableRow>)
  return (
    <>
      {renderRows}
      </>
   );
}
 
export default DayCells;