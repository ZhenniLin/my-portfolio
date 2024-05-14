import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
