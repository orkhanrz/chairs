import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:productId",
    element: <Product />
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
