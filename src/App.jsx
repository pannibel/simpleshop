import ProductList from "./components/ProductList";
import Header from ".components/Header";
import Basket from "./components/Basket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <ProductList />
      <Basket />
    </div>
  );
}

export default App;
