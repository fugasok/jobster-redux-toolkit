import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { useSelector, useDispatch } from 'react-redux'

const PageBtnContainer = () => {
	const { numOfPages, page } = useSelector((store) => store.allJobs)
	const dispatch = useDispatch()

	const pages = Array.from({ length: numOfPages }, (_, index) => {
		return index + 1
	})

	const nextPage = () => {}
	const prevPage = () => {}

	return (
		<Wrapper>
			<button className='prev-btn' onClick={prevPage}>
				<HiChevronDoubleLeft />
				prev
			</button>
			<div className='btn-container'>
				{pages.map((pageNumber) => {
					return (
						<button
							type='button'
							key={pageNumber}
							className={
								pageNumber === page ? 'pageBtn active' : 'pageBtn'
							}
							onClick={() => console.log('change page')}
						>
							{pageNumber}
						</button>
					)
				})}
			</div>

			<button className='next-btn' onClick={nextPage}>
				<HiChevronDoubleRight />
				next
			</button>
		</Wrapper>
	)
}
export default PageBtnContainer