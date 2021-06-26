import {v4} from 'uuid'
const initialState = [
  {
    type: 'Weekday',
    description: 'Заказов меньше',
    id:v4()
  },
    {
    type: 'Weekend',
      description: 'Заказов меньше',
    id:v4()
  },
 {
    type: 'Holiday',
   description: 'Заказов до жопы',
    id:v4()
  },
]
const nameShift = [{
  shift:"Дневная"
},
  {
  shift:"Вечерняя "
}]
export default {
  initialState,
  nameShift
}