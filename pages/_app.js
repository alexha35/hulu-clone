import { createGlobalStyle } from 'styled-components';

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
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
