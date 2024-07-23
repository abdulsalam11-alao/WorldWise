import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import HomePage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./Components/CityList";
import City from "./Components/City";
import CountryList from "./Components/CountryList";
import Form from "./Components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="Countries" element={<CountryList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
