import state from './initialState'
import 'date-fns';
import React from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import HeaderCell from './HeaderCell/HeaderCell'
import DayCell from './DayCell/DayCell'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  const typeDays = state.initialState.reduce((acc, elem) => {
    acc.push(elem.type)
    return acc
  }, [])
  const result = state.nameShift.reduce((acc, elem) => {
    for (let i = 0; i < typeDays.length; i++){
      elem[typeDays[i]] = '-'
    }
    acc.push(elem)
    return acc
  }, [])
  console.log(result)
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-06-22T08:00:00'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
    <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название смены</TableCell>
              <HeaderCell days={typeDays}/>
              <TableCell>Операции</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
               {/* массив ячейек */}
          </TableBody>
        </Table>
      </TableContainer>
      </>
  );
}