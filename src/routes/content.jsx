import Body from "../components/body";
import giant from "../images/Giant.jpg";
import Image from "../components/image";

const Content = () => {
  return (
    <Body title={"Content"}>
      <article className="prose">
        <h2>Taxonomy and phylogeny</h2>
        <table>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">Family</th>
              <th className="px-6 py-2 text-xs text-gray-500">Common name</th>
              <th className="hidden lg:block px-6 py-2 text-xs text-gray-500">
                Characteristics
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">Hedylidae</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  American moth-butterflies
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="hidden lg:block text-sm text-gray-500">
                  Blues, coppers, hairstreaks
                </div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">Hesperiidae</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Skippers</div>
              </td>
              <td className="px-6 py-4">
                <div className="hidden lg:block text-sm text-gray-500">
                  Small, darting flight; clubs on antennae hooked backwards
                </div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">Lycaenidae</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  Blues, coppers, hairstreaks
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="hidden lg:block text-sm text-gray-500">
                  Small, brightly coloured; often have false heads with eyespots
                  and small tails resembling antennae
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* duplicate table to show some boring cell merges... */}
        <table>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500" colSpan={3}>FAMILY</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500" rowSpan={3}>BUTTERFLIES</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  American moth-butterflies
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="hidden lg:block text-sm text-gray-500">
                  Blues, coppers, hairstreaks
                </div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              {/* <td className="px-6 py-4 text-sm text-gray-500" >Hesperiidae</td> */}
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Skippers</div>
              </td>
              <td className="px-6 py-4">
                <div className="hidden lg:block text-sm text-gray-500">
                  Small, darting flight; clubs on antennae hooked backwards
                </div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              {/* <td className="px-6 py-4 text-sm text-gray-500">Lycaenidae</td> */}
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  Blues, coppers, hairstreaks
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="hidden lg:block text-sm text-gray-500">
                  Small, brightly coloured; often have false heads with eyespots
                  and small tails resembling antennae
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <Image
          src={giant}
          alt={"A huge butterfly"}
          caption={"The Gigantic Butterfly"}
        />
        <h2>Facts and species</h2>
        <ol className="list-decimal list-inside">
          <li>
            <strong>
              Some butterfly facts{" "}
              <a href="https://www.suburbanexterminating.com/blog/post/10-fascinating-facts-about-butterflies/">
                (source)
              </a>
              :
            </strong>
            <ul className="list-disc list-inside pl-4">
              <li>Butterfly wings are transparent</li>
              <li>There are almost 20,000 butterfly species</li>
              <li>Butterflies use their feet to taste</li>
              <li>Butterflies only live for a few weeks</li>
              <li>The most common butterfly in the US is the Cabbage White</li>
              <li>Some butterfly species migrate from the cold</li>
              <li>
                One of the largest butterflies is the Giant Swallowtail
                Butterfly
              </li>
            </ul>
          </li>
          <li>
            Common species:
            <ul className="list-disc list-inside pl-4">
              <li>Monarch Butterfly</li>
              <li>Painted lady</li>
              <li>Red admiral</li>
              <li>Cabbage white</li>
              <li>Clouded yellow</li>
              <li>Large blue</li>
              <li>Large white</li>
            </ul>
          </li>
        </ol>
      </article>
    </Body>
  );
};

export default Content;
