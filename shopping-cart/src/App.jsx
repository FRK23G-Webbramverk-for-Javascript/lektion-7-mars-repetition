import './App.css';
import { useState } from 'react';

import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const products = [
    { id: 1, title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 2, title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 3, title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 4, title: 'The Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
  ];
  const [amount, setAmount] = useState(0);

  const productComponents = products.map((product) => {
    return <Product 
            title={ product.title } 
            author={ product.author } 
            text={ product.text } 
            key={ product.id }
            setAmount={ setAmount }
            amount={ amount }
            />
  });

  return (
    <main>
      <Header amount={ amount } />
      <section>
        { productComponents }
      </section>
    </main>
  )
}

export default App
