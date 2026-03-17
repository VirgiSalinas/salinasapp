import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import TurnosView from './components/TurnosView';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />


        <Routes>
          {/* Ruta principal*/}
          <Route
            path="/"
            element={<ItemListContainer />}
          />

          {/* Ruta con parámetro */}

          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />

          {/* Ruta de detalle */}

          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          {/* Ruta 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/mis-turnos"
            element={<TurnosView />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;