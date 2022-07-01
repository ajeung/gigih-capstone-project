import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DoctorDetail from "../pages/DoctorDetail";
import DoctorList from "../pages/DoctorList";
import Home from "../pages/_Home";
import Payment from "../pages/Payment";
import SearchDoctor from "../pages/SearchDoctor";
import PriceDetail from "../pages/PriceDetail";
import EditProfile from "../pages/EditProfile";
import DataUser from "../pages/DataUser";
import ViewProfile from "../pages/ViewProfile";
import ChatPages from "../pages/ChatPages";

import { selectUserName, selectUserEmail } from "../redux/reducer/reducers";
import { useSelector } from "react-redux";

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
        <Route path="/data-user" element={<DataUser />} />
        <Route path="/view-profile" element={<ViewProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/chat/:id" element={<ChatPages />} />
      </Routes>
    </HomeLayout>
  );
};

const ProtectedRoute = ({ children }) => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  if (!userName) {
    alert("Silakan lakukan Login terlebih dahulu.");
    return <Navigate to="/" />;
  }

  return children;
};

export default GlobalRoutes;
