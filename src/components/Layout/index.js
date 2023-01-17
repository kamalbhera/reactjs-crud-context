// @flow 
import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = (props) => {
    return (
        <>
          <Header />
          {props.children}
          <Footer />  
        </>
    );
};