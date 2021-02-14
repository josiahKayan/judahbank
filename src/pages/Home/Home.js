import React from 'react';

import './Home.css';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import FooterLine from '../FooterLine/FooterLine'
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Card></Card>
      <Footer></Footer>
      <FooterLine></FooterLine>

    </div>

  );
}

export default Home;