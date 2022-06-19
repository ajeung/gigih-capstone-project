import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DoctorDetail from "../pages/DoctorDetail";
import DoctorList from "../pages/DoctorList";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import SearchDoctor from "../pages/SearchDoctor";
import PriceDetail from "../pages/PriceDetail";
import EditProfile from "../pages/EditProfile";
import DataUser from "../pages/DataUser"

const GlobalRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/list-doctor/:id" element={<DoctorList />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/search-doctor" element={<SearchDoctor />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/payment/:id/price-detail" element={<PriceDetail />} />
        <Route path="/data-user" element={<DataUser />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </HomeLayout>
  );
};

export default GlobalRoutes;
