import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Landing, Error, Register, ProtectedRoute } from './pages'
import styled from 'styled-components'
import {
	AddJob,
	AllJobs,
	Profile,
	Stats,
	SharedLayout,
} from './pages/Dashboard'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path='all-jobs' element={<AllJobs />} />
					<Route path='add-job' element={<AddJob />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='landing' element={<Landing />} />
				<Route path='register' element={<Register />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<ToastContainer position='top-center' autoClose='2000' />
		</BrowserRouter>
	)
}
export default App

