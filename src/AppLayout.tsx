import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Quotes } from './pages/Quotes/Quotes'

export const AppLayout = () => {
  return (
    <div className='AppLayout'>
      <Header />
      <Quotes />
      <Footer />
    </div>
  );
}
