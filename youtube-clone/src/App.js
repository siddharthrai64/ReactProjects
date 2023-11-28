import './App.css';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children: [
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: '/watch',
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store= {store}>
      
        {/*
          Head
          Body
            Sidebar
              Menuitems
            MainContainer
              ButtonList
              VideoContainer
                VideoCard
        
        */}
        <Head/>
        <RouterProvider router={appRouter}/>
      
    </Provider>
  );
}

export default App;
