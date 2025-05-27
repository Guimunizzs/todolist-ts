import styles from "./App.module.css";

// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Typescript</h1>
      </main>

      <Footer />
    </>
  );
}

export default App;
