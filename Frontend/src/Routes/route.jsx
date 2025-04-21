import { createBrowserRouter } from "react-router-dom";
import React from "react";
import EmailVerification from "../Pages/EmailVerification.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import CreateInvoice from "../Pages/CreateInvoice.jsx";

// Lazy load pages
const Home = React.lazy(() => import("../Pages/Dashboard"));
const Login = React.lazy(() => import("../Pages/Login"));
const AuthScreen = React.lazy(() => import("../Layouts/AuthScreen"));
const Register = React.lazy(() => import("../Pages/Register"));
const PublicRoute = React.lazy(() => import("./PublicRoute"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard"));
const App = React.lazy(() => import("../App.jsx"))
const Invoice = React.lazy(() => import("../Pages/Invoice.jsx"))
const Payments = React.lazy(() => import("../Pages/Payment.jsx"))
const Customer = React.lazy(() => import("../Pages/Customers.jsx"))
const Companies = React.lazy(() => import("../Pages/Companies.jsx"))
const People = React.lazy(() => import("../Pages/People.jsx"))
const Product = React.lazy(() => import("../Pages/Products.jsx"))
const ProductCategory = React.lazy(() => import("../Pages/ProductCategory.jsx"))
const Expense = React.lazy(() => import("../Pages/Expense.jsx"))
const ExpenseCategory = React.lazy(() => import("../Pages/ExpenseCategory.jsx"))

const route = createBrowserRouter([
  {
    element : <App />,
    children : [
      {
        element: <PublicRoute />,
        children: [
          {
            element: <AuthScreen />,
            children: [
              { path: "/login", element: <Login /> },
              { path: "/register", element: <Register /> },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <MainLayout/>,
            children: [
              { path: "/dashboard", element: <Dashboard /> },
              { path: "/", element: <Dashboard /> },
              {path : "/companies",element: <Companies /> },
              {path : "/customers",element : <Customer/>},
              {path : "/expense",element : <Expense />},
              {path : "/expense-category",element: <ExpenseCategory />},
              {path : "/products", element : <Product />},
              {path : "/product-category", element : <ProductCategory />},
              {path : "/invoice",element : <Invoice />},
              {path : "/people",element : <People />},
              {path : "/payments",element : <Payments />},
              { path : "/invoice/create", element : <CreateInvoice/>}
            ],
          },
        ],
      },
      {
        path : "/verify-email",
        element : <EmailVerification />
      },
    ]
  }
  
]);

export { route };
