import React, { useState } from 'react';
import {v4} from 'uuid'
import initialState from './initialState'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DayCell from './TableCells/TableCell';
import useModal from '../../shared/hooks/useModal'
import ModalChange from './Modal/Modal';
const DaysPage = () => {
  const [showModal, setModal, toggleModal] = useModal()
  const [dayAdd, setaDay] = useState(false)
  const [typeDays, settypeDays] = useState(initialState)
  const [dayChange,setDayForChange] = useState()
  const openCloseModal = () => {
    setaDay(true)
    toggleModal()
  }
  const deleteDay = (id) => {
    const arr = typeDays.filter(elem => elem.id !== id)
    settypeDays(arr)
  }
  const addDay = (data) => {
    data.id = v4()
    settypeDays([...typeDays,data])
    toggleModal()
    setaDay(false)
  }
  const updateDay = (data, id) => {
    const days = [...typeDays]
    const findElem = days.find(elem => elem.id === id)
    const index = days.indexOf(findElem)
    days.splice(index, 1, data)
    settypeDays(days)
    toggleModal()
  }
  const takeId = (id) => {
    toggleModal()
    const changeDay = typeDays.filter(elem => elem.id === id)
    setDayForChange(changeDay)
  }
  return (
     <div>
      {showModal && <ModalChange dayAdd={dayAdd} updateDay={updateDay} dayChange={dayChange} addDay={addDay} openCloseModal={openCloseModal} showModal={showModal}/>}
      <TableContainer>
        <Button variant="contained"
          color="primary"
          onClick={() =>openCloseModal()}
        >
          Add Day
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Тип дня</TableCell>
              <TableCell>Краткое описание</TableCell>
              <TableCell>Операции</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <DayCell takeId={takeId} deleteDay={deleteDay} days={typeDays}/>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}

export default DaysPage;