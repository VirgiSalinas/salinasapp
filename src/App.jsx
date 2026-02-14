import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar se muestra en TODAS las páginas */}
      <NavBar />
      
      {/* RUTAS: Define qué componente se muestra según la URL */}
      <Routes>
        {/* Ruta principal: muestra TODOS los médicos */}
        <Route 
          path="/" 
          element={<ItemListContainer />} 
        />
        
        {/* Ruta con parámetro: filtra médicos por categoría */}
        {/* Ejemplo: /category/clinico → solo muestra clínicos */}
        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer />} 
        />
        
        {/* Ruta de detalle: muestra UN médico específico */}
        {/* Ejemplo: /item/5 → muestra el médico con id=5 */}
        <Route 
          path="/item/:id" 
          element={<ItemDetailContainer />} 
        />
        
        {/* Ruta 404: cualquier URL que no coincida con las anteriores */}
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;