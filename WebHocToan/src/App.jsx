import './index.css'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MainLayout } from './assets/layouts/MainLayout';
import { Home } from './assets/pages/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="Home"
            element={<Home />}
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
