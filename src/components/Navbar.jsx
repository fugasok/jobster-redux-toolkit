import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, logoutUser } from '../features/user/userSlice'

const Navbar = () => {
	const { user } = useSelector((store) => store.user)
	const dispatch = useDispatch()

	const toggle = () => {
		dispatch(toggleSidebar())
	}

	const [showLogout, setShowLogout] = useState(false)

	return (
		<Wrapper>
			<div className='nav-center'>
				<button type='button' className='toggle-btn' onClick={toggle}>
					<FaAlignLeft />
				</button>
			</div>
			<div>
				<Logo />
				<h3 className='logo-text'>dashboard</h3>
			</div>
			<div className='btn-container'>
				<button
					className='btn'
					type='button'
					onClick={() => setShowLogout(!showLogout)}
				>
					<FaUserCircle />
					{user?.name}
					<FaCaretDown />
				</button>
				<div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
					<button
						className='dropdown-btn'
						type='button'
						onClick={() => dispatch(logoutUser())}
					>
						logout
					</button>
				</div>
			</div>
		</Wrapper>
	)
}
export default Navbar
