import MyIntro from '../pages/myIntro'
import HtIntro from '../pages/htIntro'
import {createBrowserRouter} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MyIntro/>
  },
  {
    path: '/hometown',
    element: <HtIntro/>
  },
]);

export default router;