import Blog from '@components/Blog/Blog';
import HomePage from '@components/HomePage/Homepage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);
export default router;
