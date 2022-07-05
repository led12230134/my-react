import App from '../App';
import About from '../view/about';
import Detail from '../view/detail';
import Main from '../view/main';

const router = [{
  name:'Home',
  path:'/',
  component: <App></App>
},{
  name:'About',
  path:'/about',
  component: <About></About>
},{
  name:'Detail',
  path:'/detail',
  component: <Detail></Detail>
},{
  name:'Main',
  path:'/main',
  component: <Main></Main>
}];
export default router;
