import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// 
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
function WorkShiftPage(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date())
    const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
   
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
       </MuiPickersUtilsProvider>
    //   //   <div>
    //   //       <TableContainer>
    //   //   <Button variant="contained"
    //   //     color="primary">
    //   //     Add Type of Shift
    //   //   </Button>
    //   //   <Table>
    //   //     <TableHead>
    //   //       <TableRow>
    //   //        {/* массив дней хеадов */}
    //   //       </TableRow>
    //   //     </TableHead>
    //   //       <TableBody>
    //   //         {/* массив смен  */}
    //   //     </TableBody>
    //   //   </Table>
    //   // </TableContainer>
    //   // </div>
    );
}
export default WorkShiftPage;