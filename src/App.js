import Cart from './Components/Cart';
import Header from './Components/Header';
import Section1 from './Components/Section1';
import { createContext } from 'react';
import Products from './Components/Data';

export const cartContext = createContext();

function App() {
  return (
    <div className='app'>
      <cartContext.Provider value={Products}>
      <Header/>
      <Section1/>
      <Cart/>
      </cartContext.Provider>
    </div>
  );
}

export default App;
