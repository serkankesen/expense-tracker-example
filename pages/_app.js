import "../styles/globals.css";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "./store";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <NotificationContainer />
      </Layout>
    </Provider>
  );
}

export default MyApp;
