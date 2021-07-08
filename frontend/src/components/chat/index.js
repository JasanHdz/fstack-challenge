import Header from './header';
import FormName from '../forms/names';
import FormDate from '../forms/date';
import FormContact from '../forms/contact';
import Feedback from '../common/feedback';
import { UserContext } from '../../context/user-context';
import { useContext } from 'react';
import Button from '../common/button';
import Wrapper from '../common/wrapper'
import Divider from '../common/divider'
import Avatar from '../common/avatar'
import { CREATE_USER } from '../../graphql/mutations'
import { useMutation } from '@apollo/client'
import { TransitionGroup, Transition } from 'react-transition-group'

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

const forms = [
  FormName,
  FormDate,
  FormContact
]

function Chat() {
  const [createUser] = useMutation(CREATE_USER)
  const {
    UIstep,
    handleStep,
    name,
    secondName,
    lastName,
    secondLastName,
    day,
    month,
    year,
    email,
    phone,
    addUser
  } = useContext(UserContext);
  const fullName = `${name.value} ${secondName.value} ${lastName.value} ${secondLastName.value}`;
  const birthDay = `${day.value} de ${months[month.value < 12 ? month.value - 1 : 11]} ${year.value}`
  const handleClick = () => {
    if (UIstep < 2) {
      handleStep(UIstep + 1);
    }
  };
  const handleGoBack = () => {
    if(UIstep !== 0) handleStep(UIstep - 1)
  }
  const handleSubmit = () => {
    createUser({
      variables: {
        name: name.value,
        secondName: secondName.value,
        lastName: lastName.value,
        secondLastName: secondLastName.value,
        email: email.value,
        phone: phone.value,
        birthday: birthDay,
      }
    }).then(({ data }) => {
      addUser(data.createUser)
    })
  }
  const formInfo = {
    0: <p>Nombre: {fullName}</p>,
    1: <p>Fecha de nacimiento: {birthDay}</p>,
    2: (
      <>
        <p>Correo electrónico: {email.value} </p>
        <p>Teléfono celular: {phone.value} </p>
      </>
    ),
  };  
  const duration = 300
  const defaultStyles = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    transform: 'translateY(0px)'
  }
  const transitionStyles = {
    entering: { opacity: 0.5, display: 'block', transform: 'translateY(-380px)' },
    entered: { opacity: 1, transform: 'translateY(0)' },
    exiting: { opacity: 0.5, display: 'none', transform: 'translateY(-160px)' },
    exited: { opacity: 0, transform: 'translateY(-380px)' },
  };
  return (
    <div style={{ width: '100%' }}>
      <Header step={UIstep} />
      <Wrapper>
        <div className="form">
          <Avatar />
          <TransitionGroup>
            {forms.map((Component, idx) => {
              if(idx === UIstep) return (
                <Transition timeout={duration} key={idx} in={Boolean(UIstep === idx)}>
                  {state => (
                  <Component style={{
                    ...defaultStyles,
                    ...transitionStyles[state]
                  }} />
                )}
                </Transition>
              )
              return <div style={{display: 'none'}}>hola</div>
            })}
          </TransitionGroup>
        </div>
        <Divider marginBottom={12} />
        <Feedback>{formInfo[UIstep]}</Feedback>
        <Divider marginTop={12} />
        <div className="buttons">
          {UIstep !== 0 && <Button background="#000b49" margin={UIstep <2 && '0 10px 0 0'} onClick={handleGoBack}>Atrás</Button>}
          {UIstep < 2 && <Button onClick={handleClick}>Siguiente</Button>}
        </div>
        {UIstep === 2 && (
          <>
            <Divider marginBottom={12} />
            <Feedback background="var(--gray)">
              <p>Si tus datos son correctos por favor continuemos</p>
            </Feedback>
            <Divider marginBottom={12} />
            <Button onClick={handleSubmit}>Siguiente</Button>
            <Divider marginBottom={12} />
            <Feedback>
              <p>Nombre: {fullName}</p>
              <p>Fecha de nacimiento: {birthDay}</p>
              <p>Correo electrónico: {email.value} </p>
              <p>Teléfono celular: {phone.value} </p>
            </Feedback>
          </>
        )}
      </Wrapper>
    </div>
  );
}

export default Chat;
