import Body from "../components/body";

const Home = () => {
  return (
    <Body>
      <article className="prose lg:prose-xl">
        <p>
          <h1>Butterflies</h1>
          <a href="#fragment" className="text-blue-500">Butter</a>flies are insects in the macrolepidopteran clade
          Rhopalocera from the order Lepidoptera, which also includes moths.
          Adult butterflies have large, often{" "}
          <strong>brightly coloured wings</strong>, and conspicuous, fluttering
          flight. The group comprises the large superfamily Papilionoidea, which
          contains at least one former group, the skippers (formerly the
          superfamily "Hesperioidea"), and the most recent analyses suggest it
          also contains the moth-butterflies (formerly the superfamily
          "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56
          million years ago.
        </p>
        <blockquote>
          The butterfly said to the sun,"They can't stop talking about my
          transformation. I can only do it once in my lifetime. If only they
          know they can do it at any time and in countless ways." -Dodinsky
        </blockquote>
        <p>
          Butterflies have a four-stage life cycle, as like most insects they
          undergo complete metamorphosis. Winged adults lay eggs on the food
          plant on which their larvae, known as caterpillars, will feed.{" "}
          <em>The caterpillars grow</em>, sometimes very rapidly, and when fully
          developed, pupate in a chrysalis. When metamorphosis is complete, the
          pupal skin splits, the adult insect climbs out, and after its wings
          have expanded and dried, it flies off. Some butterflies, especially in
          the tropics, have several generations in a year, while others have a
          single generation, and a few in cold locations may take several years
          to pass through their entire life cycle.
        </p>
        <h3 id='fragment'>What's the connection to butter?</h3>
        <p>
          Back in the Middle Ages, when dairy products were made in the
          barnyard, it is possible that butterflies snacking on discarded dairy
          products gave rise to these names. Or so they say. In other languages,
          the word to describe these insects often has no connection to butter.
        </p>
      </article>
    </Body>
  );
};

export default Home;
