import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './components/pages/HomePage';
import JobsPage from './components/pages/JobsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import JobPage, { jobLoader } from './components/pages/JobPage';
import AddJobPage from './components/pages/AddJobPage';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='/jobs' element={<AddJobPage />} />
  <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
  <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;