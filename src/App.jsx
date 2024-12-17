
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductAdd from "./pages/ProductAdd";
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "product/add",
      element: <ProductAdd />,
    },
    {
      path: "product/list",
      element: <ProductList />,
    },
    {
      path: "product/edit/:id",
      element: <ProductEdit />,
    },
  ];
  const element = useRoutes(routes);
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            WEB501-ECMA
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/list">
                  Product List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/add">
                  Product Add
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-2">{element}</div>
      <Toaster />
    </main>
  );
}

export default App;
