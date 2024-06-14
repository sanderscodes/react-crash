import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './components/pages/HomePage';
import JobsPage from './components/pages/JobsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import JobPage, { jobLoader } from './components/pages/JobPage';
import AddJobPage from './components/pages/AddJobPage';
import { JobProvider } from './components/JobContext';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
     };

     const deleteJob= async (id) => {
      console.log('delete', id);
      await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
     };


    const router = createBrowserRouter(
      createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
      </Route>
      )
    );
    return (
      <JobProvider value={{ deleteJob }}>
        <RouterProvider router={router} />
      </JobProvider>
    );
  };

export default App;