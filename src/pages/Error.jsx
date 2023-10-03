import { Link } from 'react-router-dom'
import errorImg from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
	return (
		<Wrapper>
			<div>
				<img src={errorImg} alt='not found' />
				<h3>Oh! Page not Found</h3>
				<p>We can't seem to find the page you are looking for</p>
				<Link to='/'>Back to homepage</Link>
			</div>
		</Wrapper>
	)
}
export default Error
