import { cilCart, cilImagePlus, cilMovie } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    {
        component: CNavTitle,
        name: 'user',
    },
    {
        component: CNavItem,
        name: 'All Movies',
        to: '/dashboard/all/movies',
        icon: <CIcon icon={cilMovie} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Admin',
    },
    {
        component: CNavItem,
        name: 'Add Movie',
        to: '/dashboard/add/movie',
        icon: <CIcon icon={cilImagePlus} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Manage Movies',
        to: '/dashboard/manage/movies',
        icon: <CIcon icon={cilMovie} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'All Orders',
        to: '/dashboard/Orders',
        icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    },
]

export default _nav
