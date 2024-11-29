import React from 'react';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Article from './components/Article';

const App = () => {
  return (
    <div>
      <Header />
      <Article />
      <InfoCard />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
