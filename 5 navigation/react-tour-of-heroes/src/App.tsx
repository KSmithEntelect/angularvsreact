import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Heroes from "./components/Heroes";
import HeroDetail from "./components/HeroDetail";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";

const createRoutes = () => {
  return createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Menu />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/heroes" element={<Heroes />} />
      <Route path="/detail/:id" element={<HeroDetail />} />
    </Route>
  );
};

const App = () => {
  const routes = createRoutes();
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
