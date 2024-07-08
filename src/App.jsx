import Counter from "./component/Counter";
import ProductCard from "./component/ProductCard";

function App() {
  return (
    <div className="flex flex-wrap">
      <ProductCard name="Mac Mini" tag="#Macmini" />
      <ProductCard />
      <Counter />
    </div>
  );
}

export default App;
