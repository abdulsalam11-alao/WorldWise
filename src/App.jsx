import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

import CityList from "./Components/CityList";
import City from "./Components/City";
import CountryList from "./Components/CountryList";
import SpinnerFullPage from "./Components/SpinnerFullPage";
import Form from "./Components/Form";
// import Product from "./Pages/Product";
// import Pricing from "./Pages/Pricing";
// import HomePage from "./Pages/Homepage";
// import PageNotFound from "./Pages/PageNotFound";
// import AppLayout from "./Pages/AppLayout";
// import Login from "./Pages/Login";
const HomePage = lazy(() => import("./Pages/Homepage"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Product = lazy(() => import("./Pages/Product"));
const Login = lazy(() => import("./Pages/Login"));
const AppLayout = lazy(() => import("./Pages/AppLayout"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

// dist/index.html                   0.45 kB │ gzip:   0.29 kB
// dist/assets/index-3154de38.css   30.00 kB │ gzip:   5.09 kB
// dist/assets/index-205bdeda.js   510.77 kB │ gzip: 149.32 kB
function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="Countries" element={<CountryList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
