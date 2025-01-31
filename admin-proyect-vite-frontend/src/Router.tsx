import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "@/views/DashboardView";
import AppLayout from "@/layouts/AppLayout";                                             
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailsView from "./views/projects/ProjectDetailsView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                   <Route path="/" element={<DashboardView />} index />
                   <Route path="/projects/create" element={<CreateProjectView />} />
                   <Route path="/projects/:projectId/edit" element={<EditProjectView/>} />
                   <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
                </Route>   

                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<LoginView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router;

