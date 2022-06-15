import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DoctorDetail from "../pages/DoctorDetail";
import DoctorList from "../pages/DoctorList";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import SearchDoctor from "../pages/SearchDoctor";

const GlobalRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/doctor-list/:id" element={<DoctorList />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/search-doctor" element={<SearchDoctor />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </HomeLayout>
  );
};

export default GlobalRoutes;
