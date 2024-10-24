import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider}from "react-router-dom";
import Homepage from './components/homepage/HomePage.jsx';
import DashboardPage from './components/dashboardPage/DashboardPage.jsx';
import ChatPage from './components/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import { SignIn, SignUp } from '@clerk/clerk-react';
import SignInPage from './components/signinPage/SigninPage.jsx';
import SignUpPage from './components/signupPage/SignupPage.jsx';


const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path:"/sign-in/*",
        element:<SignInPage/>,
      },
      {
        path:"/sign-up/*",
        element:<SignUpPage/>,
      },
      {
        element:<DashboardLayout />,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage/>,
        },
        {
          path:"/dashboard/chats/:id",
          element:<ChatPage/>
        }
      ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
