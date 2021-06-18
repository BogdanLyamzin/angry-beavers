import {useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../../../shared/hooks/useForm';
import initialState from './initialState';
import { makeStyles } from '@material-ui/core/styles';
import styles from './EditDelete.module.css'
const EditDelete = ({ addDay, dayChange, updateDay, dayAdd }) => {
  const [dayAdding, setaddDay] = useState(dayAdd)
  const [status, setstatus] = useState(true)
  const [data,setdata, handleChange] = useForm(initialState)
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '450px',
      height: '200px',
      backgroundColor:'white'
    }
  }))
  const update = (data, id) => {
    updateDay(data, id)
    setdata({...initialState})
  }
  const add = (data) => {
    addDay(data)
    setdata({...initialState})
    setaddDay(false)
  }
  useEffect(() => {
    if (!dayAdding) {
      setdata({...data,type:dayChange[0].type,description:dayChange[0].description})
    }
  },[dayAdding])
  const setPrevious = () => {
    setstatus(false)
  }
  const classes = useStyles()
  return (
    <>
      {dayAdding ? <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic"  onChange={handleChange} value={data.type} name='type' label="Тип дня" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange} value={data.description} name='description' label="Краткое описание" variant="outlined" />
      <Button
        onClick={() =>add(data)}
        variant="contained"
          color="primary">
          Add
        </Button>
      </form> : <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" onClick={setPrevious} onChange={handleChange} value={status ? dayChange[0].type : data.type} name='type' label="Тип дня" variant="outlined" />
        <TextField id="outlined-basic" onClick={setPrevious} onChange={handleChange} value={status ? dayChange[0].description : data.description} name='description' label="Краткое описание" variant="outlined" />
      <Button
        onClick={() =>update(data,dayChange[0].id)}
        variant="contained"
          color="primary">
          Update
        </Button>
      </form>}
      </>
    
   );
}
 
export default EditDelete;