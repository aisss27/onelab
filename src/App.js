import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./components/Home";
import {Add} from "./components/Add";
import {List} from "./components/List";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/add',
      element: <Add/>
    },
    {
      path: '/list',
      element: <List/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
