import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardPage from "./pages/CardPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:repo",
    element: <CardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
