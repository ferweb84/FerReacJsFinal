import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Product from "./componentes/Product/Product"
import Products from './componentes/Products/Products';

function App() {
  return (
    <div className="App">
      <Products/>
      <Navbar/>
    </div>
  );
}

export default App;
