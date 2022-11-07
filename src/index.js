import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutFounder from './pages/AboutFounder';
import Contact from './pages/Contact';
import Todo from './pages/Todo';
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },


  {
    path: "/about",
    element:<About/>,
    children:[
        {
          path:"company",
          element:<AboutCompany/>
        },
        {
          path:"founders",
          element:<AboutFounder/>
        }

    ]
  },
]);
*/



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "todo",
        element: <Todo/>,
      },
      
      {
        path: "/about",
        element:<About/>,
        children:[
          {
            path:"company",
            element:<AboutCompany/>
          },
          {
            path:"founders",
            element:<AboutFounder/>
          }

        ]
        
      },
     

  ]

  },

 


 
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
