import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes"


const Login = lazy(() => import ("./pages/login"));
const SignUp = lazy(() => import ("./pages/sign-up"));
const Dashboard = lazy(() => import ("./pages/dashboard"));
const NotFound = lazy(() => import ("./pages/not-found"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ... </p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path="*" element={<NotFound replace to="/404" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;