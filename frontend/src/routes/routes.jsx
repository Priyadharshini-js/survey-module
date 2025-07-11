import { Navigate } from "react-router-dom";
import SurveyPage from "../pages/SurveyPage";

const routes = [
    { path: '/', name: 'VA_LaunchPad', element: <Navigate to="/accounts" />, exact: true },
    { path: '/accounts', name: 'VA_LaunchPad', element: <SurveyPage />, exact: true }
]
export default routes