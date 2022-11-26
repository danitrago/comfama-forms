import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Empleo from "./pages/empleo";
import Subsidio from "./pages/subsidio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
  {
    path: "/subsidio",
    element: <Subsidio />
  },
  {
    path: "/empleo",
    element: <Empleo />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
