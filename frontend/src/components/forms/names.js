import TextField from '../common/textfield';
import { FormContainer } from './styles';
import { UserContext } from '../../context/user-context'
import { useContext } from 'react'

function FormName(props) {
  const { name, secondName, lastName, secondLastName } = useContext(UserContext)
  return (
    <FormContainer {...props}>
      <h2>¿Cuál es tu nombre?</h2>
      <TextField
        placeholder="Nombre"
        name="name"
        value={name.value}
        onChange={name.onChange}
        required
      />
      <TextField
        placeholder="Segundo nombre"
        name="secondName"
        value={secondName.value}
        onChange={secondName.onChange}
      />
      <TextField
        required
        placeholder="Apellido Paterno"
        name="lastName"
        value={lastName.value}
        onChange={lastName.onChange}
      />
      <TextField
        placeholder="Apellido Materno"
        name="secondLastName"
        value={secondLastName.value}
        onChange={secondLastName.onChange}
      />
    </FormContainer>
  );
}

export default FormName;
