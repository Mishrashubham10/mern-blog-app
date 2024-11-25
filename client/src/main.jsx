import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// ----------- REACT-ROUTER-DOM -----------
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ------------- PAGES -------------
import Homepage from './pages/Homepage.jsx';
import PostListPage from './pages/PostListPage.jsx';
import Write from './pages/Write.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import SinglePostPage from './pages/SinglePostPage.jsx';

// ------------- MAIN LAYOUT PAGE -------------
import MainLayout from './layouts/MainLayout.jsx';

// ------------- CLERK AUTH -------------
import { ClerkProvider } from '@clerk/clerk-react';

// ------------- CLERK AUTH -------------
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/posts',
        element: <PostListPage />,
      },
      {
        path: '/:slug',
        element: <SinglePostPage />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <SignUpPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);