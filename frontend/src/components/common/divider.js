import styled from 'styled-components'
import PropTypes from 'prop-types'

const DividerStyled = styled.div`
  margin: ${({ margin }) => margin};
  border-bottom: ${({ stroke }) => `${stroke}px`} solid ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
`

const Divider = ({
  marginTop, marginBottom, marginVertical, marginHorizontal, margin: propsMargin, stroke, color, ...otherProps
}) => {
  const margin = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
  if (propsMargin) {
    margin.left = propsMargin
    margin.right = propsMargin
    margin.top = propsMargin
    margin.bottom = propsMargin
  }
  if (marginVertical) {
    margin.top = marginVertical
    margin.bottom = marginVertical
  }
  if (marginHorizontal) {
    margin.left = marginHorizontal
    margin.right = marginHorizontal
  }
  if (marginTop) {
    margin.top = marginTop
  }
  if (marginBottom) {
    margin.bottom = marginBottom
  }
  return (
    <DividerStyled
      {...otherProps}
      margin={`${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`}
      stroke={stroke}
      color={color}
    />
  )
}

Divider.defaultProps = {
  stroke: 2,
  color: 'var(--white)',
  margin: 0,
  marginVertical: 16,
  marginHorizontal: 0,
  marginBottom: 0,
  marginTop: 0,
}

Divider.propTypes = {
  stroke: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
}

export default Divider