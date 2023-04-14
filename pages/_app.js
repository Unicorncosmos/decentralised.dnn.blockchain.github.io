import "../styles/globals.css";

//INTERNAL IMPORT
import { ManamProvider } from "../Context/ManamContext";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <ManamProvider>
      <NavBar />
      <Component {...pageProps} />
    </ManamProvider>
  </div>
);

export default MyApp;