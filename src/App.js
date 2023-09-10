import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderFunction from "./components/Header";
import ShowTableProducts from './components/ProductsComponent/ShowTableProduct';
import AddProducts from './components/ProductsComponent/AddProduct';
import EditProducts from './components/ProductsComponent/EditProduct';
import ShowTableCustomer from './components/CustomersComponent/ShowTableCustomer';
import AddCustomers from './components/CustomersComponent/AddCustomer';
import EditCustomer from './components/CustomersComponent/EditCustomer';
import AddCategory from './components/CategoryComponent/AddCategory';
import EditCategory from './components/CategoryComponent/EditCategory';
import ShowTableCategory from './components/CategoryComponent/ShowTableCategory';
import ShowTableOrders from './components/OrdersComponent.js/ShowTableOrders';
import EditOrders from './components/OrdersComponent.js/EditOrders';
import ShowTableTransactions from './components/TransactionsComponent/ShowTableTransactions';
import ShowTableTopProduct from './components/TopProductComponent/ShowTableTopProduct';
import AddTopProduct from './components/TopProductComponent/AddTopProduct';
import EditTopProduct from './components/TopProductComponent/EditTopProduct';
import ShowTableSlider from './components/SliderComponent/ShowTableSlider';
import AddSlider from './components/SliderComponent/AddSlider';
import EditSlider from './components/SliderComponent/EditSlider';
import ShowTableProductReport from './components/ProductReport/ShowTableProductReport';
import ShowDashBoard from './components/dashboard';
import ConditionalScript from './EcomComponents/home';

function App() {
  return (

    <div className="App">
       {/* Header Added */}
          <HeaderFunction>
                   {/* Routes Here */}
                   <Routes> 
                        <Route path='/' element={<ShowDashBoard />} />
                        <Route path='/ShowTableProducts' element={<ShowTableProducts />} />
                        <Route path="/AddProducts" element={<AddProducts />} />
                        <Route path="/EditProducts/:userID" element={<EditProducts />}/>
                        <Route path='/ShowTableCustomer' element={<ShowTableCustomer />} />
                        <Route path="/AddCustomers" element={<AddCustomers />} />
                        <Route path="/EditCustomers/:userID" element={<EditCustomer />}/>
                        <Route path='/ShowTableCategory' element={<ShowTableCategory />} />
                        <Route path="/AddCategory" element={<AddCategory />} />
                        <Route path="/EditCategory/:userID" element={<EditCategory />}/>
                        <Route path="/ShowTableOrders" element={<ShowTableOrders />} />
                        <Route path="/EditOrders/:userID" element={<EditOrders />}/>
                        <Route path="/ShowTableTransactions" element={<ShowTableTransactions />}/>
                        <Route path="/ShowTableTopProduct" element={<ShowTableTopProduct />}/>
                        <Route path="/AddTopProduct" element={<AddTopProduct />}/>
                        <Route path="/EditTopProduct/:userID" element={<EditTopProduct />}/>
                        <Route path="/ShowTableSlider" element={<ShowTableSlider />}/>
                        <Route path="/AddSlider" element={<AddSlider />}/>
                        <Route path="/EditSlider/:userID" element={<EditSlider />}/>
                        <Route path="/ShowTableProductReport" element={<ShowTableProductReport />}/>
                        {/* Define other routes here */} 
                        <Route path="/ecom" element={<ConditionalScript/>}/>
                   </Routes>
          </HeaderFunction>
          
      </div>
  );
}

export default App;
