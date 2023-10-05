import ProductList from "./components/Product";
import Supplier from "./components/Supplier";


function App() {
  // Call API:
  // Fake: Get all products from API
  const fakeData = [
    {'id': 'P001', 'name': 'Product 1', 'price': 10, 'c_id': 1},
    {'id': 'P002', 'name': 'Product 2', 'price': 15, 'c_id': 1},
    {'id': 'P003', 'name': 'Product 3', 'price': 8, 'c_id': 2}
  ]

  return (
    <div>
      <Supplier/>
      <ProductList data = {fakeData}/>
    </div>
  );
}

export default App;
