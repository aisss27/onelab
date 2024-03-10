import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./components/Home";
import {Add} from "./components/Add";
import {List} from "./components/List";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Counter} from "./components/Counter";
import {AddRedux} from "./components/AddRedux";
import {ListRedux} from "./components/ListRedux";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/add',
      element: <AddRedux/>
    },
    {
      path: '/list',
      element: <ListRedux/>
    },
    {
      path: '/counter',
      element: <Counter/>
    },
  ])
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
