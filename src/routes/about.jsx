import Body from "../components/body";

const About = () => {
  return (
    <Body title={"About"}>
      <article className="prose">
      <h1><a href="https://github.com/Silveryo/presentation">GitHub</a></h1>
        <p>
          Stránka byla vytvořena jakožto projekt pro předmět NTI/VIS (2021).
          Zdrojem informací o motýlech je{" "}
          <a href="https://en.wikipedia.org/wiki/Butterfly">wikipedia</a>, pokud
          není uvedeno jinak.
        </p>
        <h3>HTML</h3>
        <p>
          Web obsahuje jednoduché tagy paragraph, heading, table, list (a
          podmnožné tagy), article, blockquote a určitě se najdou i další.
          Znovupoužitelné komponenty (navigace, hlavička a zápatí) jsou zabaleny v sémantických elementech.
        </p>
        <h3>CSS</h3>
        <p>
          O css se stará <a href="https://tailwindcss.com/">Tailwind CSS</a>.
          Responzivita je tvořena pomocí výchozích breakpointů knihovny. Menu se
          při zobrazení na mobilních zařízení přemění na známé 'Hamburger menu'
        </p>
      </article>
    </Body>
  );
};

export default About;
