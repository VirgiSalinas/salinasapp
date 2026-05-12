import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import TurnosView from './components/TurnosView';
import CheckOut from './components/CheckOut';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />


        <Routes>
          <Route
            path="/"
            element={<>
              <HeroSection />
              <ItemListContainer />
            </>}
          />


          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />


          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/mis-turnos"
            element={<TurnosView />}
          />
          <Route
            path="/confirmar-turnos"
            element={<CheckOut />}
          />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;