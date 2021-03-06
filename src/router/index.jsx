import { Navigate, Route, Routes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import DoctorDetail from '../pages/DoctorDetail'
import DoctorList from '../pages/DoctorList'
import Home from '../pages/Home'
import Payment from '../pages/Payment'
import SearchDoctor from '../pages/SearchDoctor'
import PriceDetail from '../pages/PriceDetail'
import ChatPages from '../pages/ChatPages'

import { selectUserName } from '../redux/reducer/reducers'
import { useSelector } from 'react-redux'

const GlobalRoutes = () => {
    return (
        <HomeLayout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/list-doctor/:id" element={<DoctorList />} />
                <Route
                    path="/doctor/:id"
                    element={
                        <ProtectedRoute>
                            <DoctorDetail />
                        </ProtectedRoute>
                    }
                />
                <Route path="/search-doctor" element={<SearchDoctor />} />
                <Route path="/payment/:id" element={<Payment />} />
                <Route path="/payment/:id/price-detail" element={<PriceDetail />} />
                <Route path="/chat/:id" element={<ChatPages />} />
            </Routes>
        </HomeLayout>
    )
}

const ProtectedRoute = ({ children }) => {
    const userName = useSelector(selectUserName)

    if (!userName) {
        alert('Silakan lakukan Login terlebih dahulu.')
        return <Navigate to="/" />
    }

    return children
}

export default GlobalRoutes
