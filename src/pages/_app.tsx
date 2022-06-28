import { ThemeProvider } from 'styled-components';
import '@styles/styles.scss';
import theme from '@theme';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { wrapper } from '@modules/store';


function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  
  

    return (
        <Component {...pageProps} />
    );
  ;
}

export default wrapper.withRedux(MyApp);
