import {v4} from 'uuid'
const initialState = [
  {
    type: 'Будний',
    description: 'Заказов меньше',
    id:v4()
  },
    {
    type: 'Выходной',
      description: 'Заказов меньше',
    id:v4()
  },
 {
    type: 'Праздничный день',
   description: 'Заказов до жопы',
    id:v4()
  },
]
export default initialState