import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="h-auto overflow-auto">
          Landing page content xdxdxdDXD
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
