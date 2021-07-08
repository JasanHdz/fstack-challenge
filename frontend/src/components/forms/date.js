import TextField from '../common/textfield';
import { FormContainer } from './styles';
import { UserContext } from '../../context/user-context'
import { useContext } from 'react'

function FormDate(props) {
  const { day, month, year } = useContext(UserContext)
  return (
    <FormContainer {...props} >
      <h2>¿Cuál es tu fecha de nacimiento?</h2>
      <TextField
        placeholder="Día"
        name="day"
        value={day.value}
        onChange={day.onChange}
        type="number"
        required
        min={1}
        max={31}
        maxLength={2}
      />
      <TextField
        placeholder="Mes"
        name="month"
        type="number"
        value={month.value}
        onChange={month.onChange}
        required
        min={1}
        max={12}
        maxLength={2}
      />
      <TextField
        placeholder="Año"
        name="year"
        value={year.value}
        onChange={year.onChange}
        type="number"
        max={new Date().getFullYear()}
        min={1960}
        maxLength={4}
        required
      />
    </FormContainer>
  );
}

export default FormDate;
