const Image = (props) => {
  return (
    <figure className="mb-4 self-center">
      <img
        className="object-cover h-48 w-96 rounded-lg"
        src={props.src}
        alt={props.alt}
      />
      <figcaption className="text-gray-600">{props.caption}</figcaption>
    </figure>
  );
};

export default Image;
