import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/styles";
import Head from "next/head";
import React, { useEffect } from "react";
// import Header from "../components/Header";
import type { AppProps } from "next/app";
import theme from "../theme";

import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
import { Amplify, Auth } from "aws-amplify";

// Amplify.configure({
// Auth: {
//   mandatorySignIn: true,
//   region: process.env.AWS_REGION,
//   userPoolId: process.env.AWS_USER_POOL_ID,
//   userPoolWebClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID,
// },
// });

try {
  Amplify.configure(awsconfig);
} catch (e) {
  console.log(e);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Social Media App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <Header /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
