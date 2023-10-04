import { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo, FormRow } from '../components'

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
}

const Register = () => {
	const [values, setValues] = useState(initialState)

	const handleChange = (e) => {
		console.log(e.target)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(e.target)
	}

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember })
	}

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{/* name field */}
				{!values.isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handleChange={handleChange}
						labelText='Name'
					/>
				)}
				{/* email field */}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					handleChange={handleChange}
					labelText='Email'
				/>
				{/* password field */}
				<FormRow
					type='password'
					name='password'
					value={values.password}
					handleChange={handleChange}
					labelText='Password'
				/>
				<button className='btn btn-block' type='submit'>
					submit
				</button>
				<p>
					{values.isMember ? 'Not a member yet?' : 'Already registered?'}
					<button
						type='button'
						className='member-btn'
						onClick={toggleMember}
					>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}
export default Register
