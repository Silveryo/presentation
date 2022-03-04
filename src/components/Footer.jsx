const Footer = () => {
  return (
    <footer className="h-20 dark:bg-gray-800 text-center text-gray-400 lg:flex gap-4 lg:gap-16 items-center justify-center">
      <div>Made by Zdeněk Odehnal</div>
      <div>
        Source: {" "}
        <strong>
          <a href="https://en.wikipedia.org/wiki/Butterfly">
            Wikipedia butterfly article
          </a>
        </strong>
      </div>
      <div>© 2022</div>
    </footer>
  );
};

export default Footer;
