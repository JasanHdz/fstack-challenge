import styled from 'styled-components'

const PrimaryButton = styled.button`
  border-radius: ${({ radius }) => (radius > -1) && `${radius}px`};
  background-color: ${({ background }) => background};
  ${({ margin }) => `margin: ${margin}`};
  ${({ disabled }) => `opacity: ${disabled && 0.58}`};
  color: white;
  text-transform: initial;
  opacity: 1;
  padding: 0.8em 1em;
  font-weight: 400;
  display: block;
  width: 100%;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  border: none;
  appearance: none;
  box-sizing: border-box;
  text-decoration: none;
  outline: 0px;
`

function Button(props) {
  const { radius, background, disabled, ...otherProps } = props
  return (
    <PrimaryButton
      {...otherProps}
      radius={radius}
      background={background}
      disabled={disabled}
    />
  )
}

Button.defaultProps = {
  radius: 4,
  background: 'var(--primary)',
  disabled: false
}

export default Button