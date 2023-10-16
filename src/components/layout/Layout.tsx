import { Header } from './header/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLoading } from '../../redux/selectors'
import { Loading } from '../loading/Loading'

export const Layout = () => {
	const isLoading = useSelector(selectIsLoading)
	return (
		<div>
			<Header />
			<Outlet />
			{isLoading && <Loading />}
		</div>
	)
}
