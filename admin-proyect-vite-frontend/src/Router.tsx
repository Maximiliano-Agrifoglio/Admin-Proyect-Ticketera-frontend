import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "@/views/DashboardView";
import AppLayout from "@/layouts/AppLayout";                                             
import CreateProjectView from "./views/projects/CreateProjectView";

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                   <Route path="/" element={<DashboardView />} index />
                   <Route path="/projects/create" element={<CreateProjectView />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router;

