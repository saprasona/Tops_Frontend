import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App = () => {
  const content1 = "Content";
  const bodyContent = "Body";
  const content2 = "Content";

  return (
    <div className="container">
      <Header />
      <Body content1={content1} bodyContent={bodyContent} content2={content2} />
     <Footer />
    </div>
  );
};


export default App;
