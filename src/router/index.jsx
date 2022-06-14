import { Route, Routes } from "react-router-dom";
import DoctorList from "../pages/DoctorList";
import SearchDoctor from "../pages/SearchDoctor";

const GlobalRoutes = () => {
    return (
        <Routes>
            <Route path="/doctor-list/:id" element={<DoctorList />} />
            <Route path="/search-doctor" element={<SearchDoctor />} />
        </Routes>
    );
};

export default GlobalRoutes;