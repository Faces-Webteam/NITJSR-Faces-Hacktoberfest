import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event'
import Gallery from './Pages/Gallery/Gallery'
import People from './Pages/People/People'
import Workshop from './Pages/Workshop/Workshop'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
export const Routee = [
    {
        id: 1,
        component: <Home/>,
        path: "/",
        exact: true,  
    },
    {
      id: 2,
      component: <Event/>,
      path: "/events",
      exact: true,
    },
    {
      id: 3,
      component: <Gallery/>,
      path: "/gallery",
      exact: true,
    },
    {
      id: 4,
      component: <Workshop/>,
      path: "/workshop",
      exact: true,
    },
    {
      id: 5,
      component: <People/>,
      path: "/people",
      exact: true,
    },
    {
      id: 6,
      component: <Navbar/>,
      path: "/navbar",
      exact: true,
    },
    {
      id: 7,
      component: <Footer/>,
      path: "/footer",
      exact: true,
    }
 
]