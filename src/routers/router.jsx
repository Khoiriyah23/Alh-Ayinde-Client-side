import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import 'remixicon/fonts/remixicon.css'
import Home from '../pages/home/Home';
// import CategoryPage from '../pages/category/CategoryPage';
import CategoryPage from '../pages/category/categoryPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/categories/:categoryName",
            element:<CategoryPage/>
        }
      ]
      
    },
  ]);

  export default router;