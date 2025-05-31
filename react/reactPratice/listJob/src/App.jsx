import { createBrowserRouter, RouterProvider} from "react-router-dom"
import {Button} from "./components/ui/button.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import Applayout from "./layoutes/App_layout.jsx"
import Onbording from "./pages/Onbording.jsx"
import JobListing from "./pages/Job-listing.jsx"
import Job from "./pages/Job.jsx"
import PostJob from "./pages/Post-job.jsx"
import SavedJob from "./pages/Saved-job.jsx"
import MyJobs from "./pages/My-jobs.jsx"
import  "./App.css"
import { ThemeProvider } from "./components/theme-provider"
function App() {

  const router  = createBrowserRouter([
    {
      element : <Applayout/>,
      children: [
        {
          path:'/',
          element:<LandingPage/>
        },
        {
          path:'/onbording',
          element:<Onbording/>
        },
        {
          path:'/jobs',
          element:<JobListing/>
        },
        {
          path:'/job/:id',
          element:<Job/>
        },
        {
          path:'/post-job',
          element:<PostJob/>
        },
        {
          path:'/saved-jobs',
          element:<SavedJob/>
        },
        {
          path:'/my-jobs',
          element:<MyJobs/>
        },

      ]
    }
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
