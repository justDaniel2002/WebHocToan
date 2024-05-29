import "./index.css";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { ParentLogin } from "./pages/ParentLogin";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserLayout } from "./layouts/UserLayout";
import { Learning } from "./pages/Learning";
import { InnerChartLayout } from "./layouts/InnerChartLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<UserLayout />}>
          <Route element={<InnerChartLayout />}>
            <Route path="Learning" element={<Learning />} />
          </Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="ParentLogin" element={<ParentLogin />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
