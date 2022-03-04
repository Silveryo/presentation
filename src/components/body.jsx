import Navigation from "../components/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

const Body = (props) => {
  return (
    <>
      <Navigation />
      <Header title={props.title} />
      <main className="max-w-7xl min-h-screen mx-auto pt-6 pb-40 lg:pb-80 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="h-auto overflow-auto">{props.children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Body;
