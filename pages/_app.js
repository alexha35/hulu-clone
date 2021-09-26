import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const GlobalStyle = createGlobalStyle`
    :root{
      --primary-color: '#3DBB3D',
      --font-primary-color : '#666666';
    }

    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    body{
      background-color: #15303E;
    }
  `;

	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap' rel='stylesheet' />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
