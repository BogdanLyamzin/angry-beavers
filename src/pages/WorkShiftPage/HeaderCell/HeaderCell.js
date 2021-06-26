import TableCell from '@material-ui/core/TableCell';
const TableHeadCells = ({ days }) => {
  const headerCell = days.map(item => <TableCell>{item}</TableCell>)
  return (
    <>
      {headerCell}
      </>
   );
}
 
export default TableHeadCells;