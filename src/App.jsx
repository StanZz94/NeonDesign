import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import RootLayout from './components/RootLayout';
import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    //errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      { path: 'about-us', element: <AboutUs /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;