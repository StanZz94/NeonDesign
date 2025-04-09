import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    //errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      //{ path: 'events', element: <EventsPage /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;