import Body from "../components/body";
import Image from "../components/image";

import hesperia from "../images/Hesperia.jpg";
import macrosoma from "../images/Macrosoma.jpg";
import maculinea from "../images/Maculinea.jpg";
import parthenos from "../images/Parthenos.jpg";
import midflight from "../images/Butterfly_midflight.jpg";

const Media = () => {
  return (
    <Body title={"Media"}>
      <div className="grid grid-cols-2 gap-4">
        <Image src={hesperia} alt={"Hesperia"} caption={"Hesperia"} />
        <Image src={macrosoma} alt={"Macrosoma"} caption={"Macrosoma"} />
        <Image src={maculinea} alt={"Maculinea"} caption={"Maculinea"} />
        <Image src={parthenos} alt={"Parthenos"} caption={"Parthenos"} />
        <Image
          src={midflight}
          alt={"Butterfly midflight"}
          caption={"Butterfly midflight"}
        />
      </div>
    </Body>
  );
};

export default Media;
