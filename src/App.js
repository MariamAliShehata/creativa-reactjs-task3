import logo from './logo.svg';

import './App.css';
import Products from './components/task3/Product/Products';
import { UserProvider } from './Context/UserContext';
import ComponentOne from './components/Task4/Components/ComponentOne';

function App() {
  return (
    <div className="App">
      

      {/* <h1>Product List</h1>
      <Products/> */}
      <UserProvider value="passedvalue">
          <ComponentOne/>
      </UserProvider>
    </div>
  );
}

export default App;
