import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "@/views/DashboardView";
import AppLayout from "@/layouts/AppLayout";                                             
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailsView from "./views/projects/ProjectDetailsView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeWiew from "./views/auth/RequestNewCodeWiew";
import ForgotPassword from "./views/auth/ForgotPassword";
import NewPasswordView from "./views/auth/NewPasswordView";

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
                    <Route path="/auth/register" element={<RegisterView/>}/>
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView/>}/>
                    <Route path="/auth/request-code" element={<RequestNewCodeWiew/>}/>
                    <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/auth/new-password" element={<NewPasswordView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router;

