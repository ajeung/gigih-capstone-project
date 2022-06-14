import { Route, Routes } from "react-router-dom";
import DoctorList from "../pages/DoctorList";

const GlobalRoutes = () => {
    return (
        <Routes>
            <Route path="/doctor-list" element={<DoctorList />} />
        </Routes>
    );
};

export default GlobalRoutes;