import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "@/views/DashboardView";
import AppLayout from "@/layouts/AppLayout";

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                   <Route path="/" element={<DashboardView />} index />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router;

