import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInterval } from '../../../redux/actionCreators/orderAC';
import { reactRouter } from '../../../utils/utils';

function FormBooking() {

  function foo(max, min) {
    const maxDay = Date.parse(max);
    const minDay = Date.parse(min);

    const interval = [];
    for (let i = minDay; i <= maxDay; i += 60 * 60 * 24 * 1000) {
      interval.push(new Date(i).toISOString().substring(0, 10));
    }
    return interval.length - 1
  }
  const { id } = useParams();
  const { orders, interval } = useSelector(state => state.orderReducer);
  const allDay = foo(interval.dataOutUser, interval?.dataInUser);
  const currentHouse = orders.find(el => el.id === +id);
  const summa = `${allDay * currentHouse.price}`
  const createOrderForm = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault()
    dispatch(deleteInterval({}))
    navigate(-1)
  };

  const createOrder = (event) => {
    event.preventDefault();
    const info = Object.fromEntries(new FormData(createOrderForm.current))
    dispatch({ type: "SAVE_MY_ORDER", payload: { info, interval, currentHouse, summa } })
    //Добавить тосты
    navigate(reactRouter.user.homepage)
  }
  return (
    <div>
      <p>{currentHouse?.name}</p>
      <p>{currentHouse?.price} ₽/день</p>
      <div>
        <p>Период: {interval?.dataInUser} - {interval?.dataOutUser}</p>
        <p>Общая сумма заказа {summa}₽</p>
      </div>

      <form ref={createOrderForm} onSubmit={createOrder}>
        <input type='text' placeholder='Имя' name='name' required  autoComplete='off'/>
        <input type='email' placeholder='Email' name='email' required  autoComplete='off'/>
     
        <input type='text' placeholder='8(123)-456-78-90' name='phone' id='phone' minLength='11' required  autoComplete='off'  onKeyPress={(event)=>{
          if(!/[0-9]/.test(event.key)){
            event.preventDefault()
          }
        }} />
        <input type='text' placeholder='Ваш комментарий' name='comment'  autoComplete='off' />
        <button>Забронировать</button>
      </form>
      <button onClick={goBack}>Назад</button>
    </div>
  );
}

export default FormBooking;
