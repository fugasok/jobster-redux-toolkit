import { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'

const JobsContainer = () => {
	const { jobs, isLoading } = useSelector((store) => store.allJobs)
	const dispatch = useDispatch()

	if (isLoading) {
		return (
			<Wrapper>
				<Loading center='center'/>
			</Wrapper>
		)
	}

	if (jobs.lenght === 0) {
		return (
			<Wrapper>
				<h2>No jobs found</h2>
			</Wrapper>
		)
	}

	return (
		<Wrapper>
			<h5>Jobs info</h5>
			<div className='jobs'>
				{jobs.map((job) => {
					console.log(job)
					return <Job key={job._id} {...job} />
				})}
			</div>
		</Wrapper>
	)
}
export default JobsContainer
