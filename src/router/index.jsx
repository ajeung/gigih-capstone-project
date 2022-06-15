import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DoctorList from "../pages/DoctorList";
import SearchDoctor from "../pages/SearchDoctor";
import PriceDetail from "../pages/PriceDetail";

const GlobalRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/doctor-list/:id" element={<DoctorList />} />
        <Route path="/search-doctor" element={<SearchDoctor />} />
        <Route path="/payment/:id/price-detail" element={<PriceDetail />} />
      </Routes>
    </HomeLayout>
  );
};

export default GlobalRoutes;
