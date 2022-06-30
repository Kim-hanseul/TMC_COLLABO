import '@styles/styles.scss';
import { wrapper } from '@modules/store';


function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <Component {...pageProps} />
    );
  ;
}

export default wrapper.withRedux(MyApp);
