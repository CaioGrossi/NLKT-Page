import React from 'react';
import GlobalStyle from '../styles/global.styles';

import Header from '../components/Header';
import SectionIntroduction from '../components/SectionIntroduction';
import SectionNLTKLib from '../components/SectionNLTKLib';
import SectionPlayground from '../components/SectionPlayground';

function LandingPage() {
  return (
    <>
      <Header />
      <SectionIntroduction />
      <SectionNLTKLib />
      <SectionPlayground />
      <GlobalStyle />
    </>
  );
}

export default LandingPage;
