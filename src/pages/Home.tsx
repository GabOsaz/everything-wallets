import { DataProvider } from "../appLevelState/DataContext";
import Layout from "../components/home/Layout";
import Wallet from "./wallets/view";

function Home() {
  return (
    <Layout>
      <DataProvider>
        <Wallet />
      </DataProvider>
    </Layout>
  );
}

export default Home;
