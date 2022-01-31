import "../styles/minorFixes.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#063B66",
    },
    secondary: {
      main: "#09BECF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "white",
          textAlign: "left",
          svg: {
            fill: "white",
          },
          borderBottom: "1px solid white",
          "&:last-child": {
            borderBottom: "0px solid white",
          },
          "&:hover": {
            backgroundColor: "white",
            color: "#063B66",
            svg: {
              fill: "#063B66",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
          // backgroundColor: "rgba(6, 59, 102,0.6)",
          backdropfilter: "saturate(180%) blur(50px)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          border: "2px solid #09BECF",
          backgroundColor: "transparent",
          borderRadius: "10px",
          "&:after, &:before": {
            display: "none",
          },
          input: {
            padding: "10px",
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            fieldset: {
              textTransform: "none",
              backgroundColor: "white",
              border: "1px solid white",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          input: {},
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          ".MuiGrid-item": {
            paddingTop: 0,
          },
        },
      },
    },
    MuiInput:{
      styleOverrides:{
        root:{
          "&::before, &::after":{
            display:"none"
          }
        }
      }
    }
  },
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <FloatingButton />
    <Footer />
  </ThemeProvider>
);

export default MyApp;
