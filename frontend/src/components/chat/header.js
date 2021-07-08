import styled from 'styled-components'
import Wrapper from '../common/wrapper'

const HeaderStyled = styled.div`
	padding: 2px 1px;
	background-color: var(--bgPrimary);
	position: relative;
	z-index: 2;
	.progressBar {
		box-sizing: border-box;
		height: 4px;
		background-color: rgba(0,0,0,.45);
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.porcent {
		width: ${({ size }) => `calc(${size} * 100% / 3)`};
		background-color: var(--primary);
		height: inherit;
	}
`

function Header({ step }) {
	return (
		<HeaderStyled size={Number(step) + 1}>
			<Wrapper>
				<h1>Título del formulario</h1>
				<h3>En menos de 5 minutos</h3>
			</Wrapper>
			<div className="progressBar">
				<div className="porcent"></div>
			</div>
		</HeaderStyled>
	)
}

export default Header
