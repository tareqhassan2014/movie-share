import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import AdminDashboardHome from "./admin/components/AdminDashboardHome";
import ManageOrders from "./admin/components/ManageOrders";
import ManageProduct from "./admin/components/ManageProduct";
import './App.css';


function App() {
    return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<AdminDashboard />}/>
        <Route path="/dashboard" element={<AdminDashboard />}>
              <Route index element={<AdminDashboardHome />} />
              <Route path="/dashboard/orders" element={<ManageOrders />} />
              <Route path="/dashboard/movies" element={<ManageProduct />} />
              <Route path="/dashboard/admin" element={<AdminDashboardHome />} />
        </Route> 
    
    </Routes>
    </div>
    )
}

export default App;
