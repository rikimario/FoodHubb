import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx"
// import './assets/styles.css'


function App() {

  return (
    <div>
      <NavBar />

      <main className="flex-shrink-0">
        <Header />
      </main>

      <Footer />
    </div>
  );
};

export default App
