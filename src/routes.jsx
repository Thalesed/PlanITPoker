import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AppLayout } from "./components";
import { MainPage } from "./pages"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}

