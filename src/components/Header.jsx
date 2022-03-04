const Header = (props) => {
  return (
    <div>
      <header className="bg-white shadow mt-16 lg:pl-36">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{props.title}</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
