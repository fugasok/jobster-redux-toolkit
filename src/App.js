import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Landing, Error, Dashboard, Register } from './pages'
import styled from 'styled-components'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='landing' element={<Landing />} />
				<Route path='register' element={<Register />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<ToastContainer position='top-center'/>
		</BrowserRouter>
	)
}
export default App


