import { useMediaQuery } from "react-responsive";

import HeaderBis from "../components/HeaderBis";
import HeaderDesktop from "../components/HeaderDesktop";

import "./styles/CSR.scss";

function CSR() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isTabletOrMobile && (
        <div>
          <HeaderBis />
          <div className="csr-section">
            <h2> Ma démarche</h2>
            <div className="csr-container">
              <p>
                Le numérique “peut être un formidable outil de création de
                nouvelles valeurs durables, plus respectueuses de
                l’environnement et plus éthiques envers la société s’il est
                encadré et réfléchi en termes d’impacts"{" "}
                <a href="https://charter.isit-europe.org/"> (INR)</a>. Si on
                parle souvent de Responsabilité Numérique des Entreprises (RNE),
                je suis convaincue que chacun, quelle que soit sa position, a un
                rôle à jouer dans la promotion d'une utilisation éthique et
                durable du numérique.
              </p>
              <p>
                C'est pourquoi j'ai décidé d’apporter ma (petite) pierre à
                l’édifice et choisi d'appliquer les principes du numérique
                responsable dans le cadre du développement de ce projet. J’ai
                bien conscience que je suis loin d'être une experte et suis par
                conséquent très preneuse de vos retours et recommandations si
                vous en avez. Les longs voyages commencent toujours par un
                premier pas, alors voici le mien sur le chemin du numérique
                responsable !
              </p>

              <h3> Actions concrètes </h3>

              <div className="csr-actions">
                <h4>
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M13 24h-2v-4.829c-.695-.173-1.413-.502-1.951-.895-.5.15-1.019.225-1.549.225-3.033 0-5.5-2.505-5.5-5.584 0-1.283.421-2.494 1.197-3.477-.195-.496-.297-1.025-.297-1.565 0-2.025 1.403-3.721 3.298-4.12 1.042-2.27 3.301-3.755 5.802-3.755 2.501 0 4.761 1.485 5.803 3.756 1.894.398 3.297 2.094 3.297 4.119 0 .54-.102 1.07-.296 1.565.776.983 1.196 2.193 1.196 3.477 0 3.079-2.468 5.584-5.5 5.584-.528 0-1.046-.075-1.545-.224-.518.387-1.224.734-1.955.908v4.815zm-3.45-8.081c.948 1.371 2.191 1.384 2.506 1.384.341 0 1.567-.075 2.395-1.384.701.416 2.891 1.161 4.494-.438 1.389-1.392 1.615-4.14-.617-5.726 1.118-1.212.803-2.311.567-2.824-.343-.748-1.085-1.334-2.524-1.293-.416-1.98-2.462-3.638-4.371-3.638-1.894 0-3.986 1.616-4.37 3.638-1.245-.028-2.052.523-2.368 1.007-.325.5-.667 1.812.41 3.11-2.188 1.862-1.99 4.352-.616 5.726 1.866 1.864 4.011.648 4.494.438z"
                      fill="#005580"
                    />
                  </svg>{" "}
                  Environnement
                </h4>
                <ul>
                  <li>
                    <p>
                      Utilisation de polices optimisées pour le web (Google
                      Fonts) qui sont spécialement conçues pour réduire le temps
                      de chargement des pages.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Utilisation de SVG plutôt que d’images.</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Lorsque des images sont utilisées, elles sont au format
                      WebP, plus léger et plus efficace en termes de chargement.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilisation d’icônes « semi-solid » pour réduire la
                      consommation d'encre, notamment lors de l'impression du
                      CV.
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilisation d’éco-couleurs et sobriété dans la charte
                      graphique (blanc, noir et couleur complémentaire). Pour le
                      print (CV), les applats de couleur ont été limités et les
                      couleurs possèdent toutes un taux d’encrage inférieur à
                      100%.
                    </p>
                  </li>
                  <li>
                    <p>
                      Absence de requêtes ou de plugins externes (notamment pour
                      le style) pour optimiser la performance.
                    </p>
                  </li>
                </ul>

                <div className="csr-optimisations">
                  <p className="csr-optimisations-title">
                    Optimisations envisagées dans les futures versions du
                    portfolio
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <p>Mise en place d’un mode sombre (dark mode). </p>
                    </li>
                    <li>
                      <p>Hébergement sur un site écologique. </p>
                    </li>
                    <li>
                      <p>
                        Optimisation du code pour améliorer les performances.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="csr-actions">
                <h4>
                  {" "}
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m18.39 8.428c-.835.186-2.113.51-2.845.866-1.089.529-1.874 1.358-1.874 2.76 0 4.089 3.073 7.956 3.073 8.293 0 .131-.137.203-.227.113 0-.001-.001-.002-.001-.002-.673-.69-1.997-2.747-2.606-3.738v-.001c-.404-.653-.951-1.448-1.903-1.448h-.003c-.961 0-1.509.791-1.914 1.449-2.274 3.698-2.707 3.738-2.607 3.738-.094.095-.228.015-.228-.111 0-.285 3.073-4.285 3.073-8.293 0-1.336-.697-2.139-1.744-2.678-.833-.428-1.923-.669-2.956-.944-.009-.002-.017-.004-.026-.006-.138-.032-.138-.272.011-.299 1.098.25 3.412.923 6.387.923 2.94 0 5.295-.669 6.389-.923.145.029.152.265.001.301m-6.392-4.928c.858 0 1.552.7 1.552 1.562s-.694 1.563-1.552 1.563c-.856 0-1.55-.701-1.55-1.563s.694-1.562 1.55-1.562m6.367 3.125c-.427 0-2.112.584-4.474.821.699-.561 1.157-1.414 1.157-2.384 0-1.691-1.366-3.062-3.05-3.062-1.681 0-3.049 1.371-3.049 3.062 0 .97.458 1.824 1.158 2.385-2.361-.238-4.018-.822-4.472-.822-.897 0-1.635.738-1.635 1.653 0 .765.536 1.437 1.256 1.608 1.805.478 3.573.755 3.573 2.168 0 3.145-2.041 6.072-2.852 7.462-.002.003-.004.006-.005.009-.142.251-.216.536-.216.822 0 .916.737 1.653 1.635 1.653.437 0 .853-.174 1.165-.494.722-.741 2.157-2.937 2.811-3.999.12-.195.238-.383.371-.537.082-.096.151-.199.267-.199.113 0 .176.105.256.198.133.154.252.343.373.539.652 1.06 2.086 3.255 2.809 3.997.31.319.724.495 1.167.495.896 0 1.634-.737 1.634-1.653 0-.282-.07-.562-.226-.837-.002-.002-.003-.005-.005-.008-.83-1.426-2.843-4.3-2.843-7.448 0-1.516 2.067-1.772 3.567-2.167.728-.173 1.263-.846 1.263-1.609 0-.915-.739-1.653-1.635-1.653"
                      fill="#005580"
                    />
                  </svg>
                  Accessibilité{" "}
                </h4>
                <ul>
                  <li>
                    <p>
                      Utilisation de polices accessibles, claires et lisibles.
                      Les deux polices principales sont Luciole et Atkinson
                      Hyperlegible, deux typographies conçues spécialement pour
                      faciliter la lecture des personnes malvoyantes. Pour le
                      print une taille minimum de 12px pour le texte et de 16px
                      pour les titres ont été choisis.
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilisation de couleurs avec un contraste supérieur à la
                      norme.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Utilisation de textes alternatifs sur les images. </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Respect de la hiérarchie des titres et utilisations des
                      balises HTML.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Optimisation de mon Readme GitHub pour qu’il corresponde
                      aux normes d'accessibilité.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Pas d’utilisation d’animations. </p>
                  </li>
                </ul>
                <div className="csr-optimisations">
                  <p className="csr-optimisations-title">
                    Optimisations envisagées dans les futures versions du
                    portfolio
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <p>Navigation au clavier. </p>
                    </li>
                    <li>
                      {" "}
                      <p> Ajout de transcription de texte. </p>
                    </li>
                    <li>
                      <p>
                        Possibilité de gérer la taille du texte et de changer
                        les couleurs du site en fonction du type de vision.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="csr-actions">
                <h4>
                  {" "}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-3v9l-2-1.547-2 1.547v-9h-8v16h15v-16z"
                      fill="#005580"
                    />
                  </svg>
                  Quelques Ressources{" "}
                </h4>
                <ul className="link-ul">
                  <li>
                    <a href="https://institutnr.org/">
                      Site web de l'Institut du Numérique Responsable
                    </a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/WAI/standards-guidelines/wcag/fr">
                      "Règles pour l’accessibilité des contenus Web (WCAG) 2 –
                      Vue d’ensemble" (W3C)
                    </a>
                  </li>

                  <li>
                    <a href="https://www.concept-image.fr/blog/eco-couleurs/">
                      "Eco-couleurs : une charte graphique éco-responsable pour
                      le web et le print" (Concept Image)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.concept-image.fr/blog/eco-couleurs/">
                      "Les bonnes pratiques pour éco-concevoir un site web"
                      (UseWeb)
                    </a>
                  </li>
                  <li>
                    <a href="https://dear-sunflower.com/">
                      Blog de Dear SunFlower - Studio Graphique Engagé
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.hello-bokeh.fr/2023/01/12/accessibilite-et-typographie-quest-ce-quune-police-de-caracteres-accessible/">
                      "Accessibilité et typographie : qu’est-ce qu’une police de
                      caractères accessible ?" (Hello-bokeh)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.light-communication.fr/">
                      Site web Light. - Communication Responsable Angers
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/orgs/community/discussions/64778">
                      "Tips for Making your GitHub Profile Page Accessible"
                      (GitHub Community)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <div className="csr-section">
            <div className="title-flex">
              <div className="line"></div>
              <h2> Ma démarche </h2>
              <div className="line"></div>
            </div>
            <div className="csr-container">
              <p>
                Le numérique “peut être un formidable outil de création de
                nouvelles valeurs durables, plus respectueuses de
                l’environnement et plus éthiques envers la société s’il est
                encadré et réfléchi en termes d’impacts"{" "}
                <a href="https://charter.isit-europe.org/"> (INR)</a>. Si on
                parle souvent de Responsabilité Numérique des Entreprises (RNE),
                je suis convaincue que chacun, quelle que soit sa position, a un
                rôle à jouer dans la promotion d'une utilisation éthique et
                durable du numérique.
              </p>
              <p>
                C'est pourquoi j'ai décidé d’apporter ma (petite) pierre à
                l’édifice et choisi d'appliquer certains principes du numérique
                responsable dans le cadre du développement de ce projet. J’ai
                bien conscience que je suis loin d'être une experte et suis par
                conséquent très preneuse de vos retours et recommandations si
                vous en avez. Les longs voyages commencent toujours par un
                premier pas, alors voici le mien sur le chemin du numérique
                responsable !
              </p>

              <h3> Actions concrètes </h3>

              <div className="csr-actions">
                <h4>
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M13 24h-2v-4.829c-.695-.173-1.413-.502-1.951-.895-.5.15-1.019.225-1.549.225-3.033 0-5.5-2.505-5.5-5.584 0-1.283.421-2.494 1.197-3.477-.195-.496-.297-1.025-.297-1.565 0-2.025 1.403-3.721 3.298-4.12 1.042-2.27 3.301-3.755 5.802-3.755 2.501 0 4.761 1.485 5.803 3.756 1.894.398 3.297 2.094 3.297 4.119 0 .54-.102 1.07-.296 1.565.776.983 1.196 2.193 1.196 3.477 0 3.079-2.468 5.584-5.5 5.584-.528 0-1.046-.075-1.545-.224-.518.387-1.224.734-1.955.908v4.815zm-3.45-8.081c.948 1.371 2.191 1.384 2.506 1.384.341 0 1.567-.075 2.395-1.384.701.416 2.891 1.161 4.494-.438 1.389-1.392 1.615-4.14-.617-5.726 1.118-1.212.803-2.311.567-2.824-.343-.748-1.085-1.334-2.524-1.293-.416-1.98-2.462-3.638-4.371-3.638-1.894 0-3.986 1.616-4.37 3.638-1.245-.028-2.052.523-2.368 1.007-.325.5-.667 1.812.41 3.11-2.188 1.862-1.99 4.352-.616 5.726 1.866 1.864 4.011.648 4.494.438z"
                      fill="#005580"
                    />
                  </svg>{" "}
                  Environnement
                </h4>
                <ul>
                  <li>
                    <p>
                      Utilisation de polices optimisées pour le web (Google
                      Fonts) qui sont spécialement conçues pour réduire le temps
                      de chargement des pages.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Utilisation de SVG plutôt que d’images.</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Lorsque des images sont utilisées, elles sont au format
                      WebP, plus léger et plus efficace en termes de chargement.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilisation d’icônes « semi-solid » pour réduire la
                      consommation d'encre, notamment lors de l'impression du
                      CV.
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilisation d’éco-couleurs et sobriété dans la charte
                      graphique (blanc, noir et couleur complémentaire). Pour le
                      print (CV), les applats de couleur ont été limités et les
                      couleurs possèdent toutes un taux d’encrage inférieur à
                      100%.
                    </p>
                  </li>
                  <li>
                    <p>
                      Absence de requêtes ou de plugins externes (notamment pour
                      le style) pour optimiser la performance.
                    </p>
                  </li>
                </ul>

                <div className="csr-optimisations">
                  <p className="csr-optimisations-title">
                    Optimisations envisagées dans les futures versions du
                    portfolio
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <p>Mise en place d’un mode sombre (dark mode). </p>
                    </li>
                    <li>
                      <p>Hébergement sur un site écologique. </p>
                    </li>
                    <li>
                      <p>
                        Optimisation du code pour améliorer les performances.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="csr-actions">
                <h4>
                  {" "}
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m18.39 8.428c-.835.186-2.113.51-2.845.866-1.089.529-1.874 1.358-1.874 2.76 0 4.089 3.073 7.956 3.073 8.293 0 .131-.137.203-.227.113 0-.001-.001-.002-.001-.002-.673-.69-1.997-2.747-2.606-3.738v-.001c-.404-.653-.951-1.448-1.903-1.448h-.003c-.961 0-1.509.791-1.914 1.449-2.274 3.698-2.707 3.738-2.607 3.738-.094.095-.228.015-.228-.111 0-.285 3.073-4.285 3.073-8.293 0-1.336-.697-2.139-1.744-2.678-.833-.428-1.923-.669-2.956-.944-.009-.002-.017-.004-.026-.006-.138-.032-.138-.272.011-.299 1.098.25 3.412.923 6.387.923 2.94 0 5.295-.669 6.389-.923.145.029.152.265.001.301m-6.392-4.928c.858 0 1.552.7 1.552 1.562s-.694 1.563-1.552 1.563c-.856 0-1.55-.701-1.55-1.563s.694-1.562 1.55-1.562m6.367 3.125c-.427 0-2.112.584-4.474.821.699-.561 1.157-1.414 1.157-2.384 0-1.691-1.366-3.062-3.05-3.062-1.681 0-3.049 1.371-3.049 3.062 0 .97.458 1.824 1.158 2.385-2.361-.238-4.018-.822-4.472-.822-.897 0-1.635.738-1.635 1.653 0 .765.536 1.437 1.256 1.608 1.805.478 3.573.755 3.573 2.168 0 3.145-2.041 6.072-2.852 7.462-.002.003-.004.006-.005.009-.142.251-.216.536-.216.822 0 .916.737 1.653 1.635 1.653.437 0 .853-.174 1.165-.494.722-.741 2.157-2.937 2.811-3.999.12-.195.238-.383.371-.537.082-.096.151-.199.267-.199.113 0 .176.105.256.198.133.154.252.343.373.539.652 1.06 2.086 3.255 2.809 3.997.31.319.724.495 1.167.495.896 0 1.634-.737 1.634-1.653 0-.282-.07-.562-.226-.837-.002-.002-.003-.005-.005-.008-.83-1.426-2.843-4.3-2.843-7.448 0-1.516 2.067-1.772 3.567-2.167.728-.173 1.263-.846 1.263-1.609 0-.915-.739-1.653-1.635-1.653"
                      fill="#005580"
                    />
                  </svg>
                  Accessibilité{" "}
                </h4>
                <ul>
                  <li>
                    <p>
                      Utilisation de polices accessibles, claires et lisibles.
                      Les deux polices principales sont Luciole et Atkinson
                      Hyperlegible, deux typographies conçues spécialement pour
                      faciliter la lecture des personnes malvoyantes. Pour le
                      print une taille minimum de 12px pour le texte et de 16px
                      pour les titres ont été choisis.
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilisation de couleurs avec un contraste supérieur à la
                      norme.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Utilisation de textes alternatifs sur les images. </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Respect de la hiérarchie des titres et utilisations des
                      balises HTML.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Optimisation de mon Readme GitHub pour qu’il corresponde
                      aux normes d'accessibilité.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Pas d’utilisation d’animations. </p>
                  </li>
                </ul>
                <div className="csr-optimisations">
                  <p className="csr-optimisations-title">
                    Optimisations envisagées dans les futures versions du
                    portfolio
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <p>Navigation au clavier. </p>
                    </li>
                    <li>
                      {" "}
                      <p> Ajout de transcription de texte. </p>
                    </li>
                    <li>
                      <p>
                        Possibilité de gérer la taille du texte et de changer
                        les couleurs du site en fonction du type de vision.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="csr-actions">
                <h4>
                  {" "}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-3v9l-2-1.547-2 1.547v-9h-8v16h15v-16z"
                      fill="#005580"
                    />
                  </svg>
                  Quelques Ressources{" "}
                </h4>
                <ul className="link-ul">
                  <li>
                    <a href="https://institutnr.org/">
                      Site web de l'Institut du Numérique Responsable
                    </a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/WAI/standards-guidelines/wcag/fr">
                      "Règles pour l’accessibilité des contenus Web (WCAG) 2 –
                      Vue d’ensemble" (W3C)
                    </a>
                  </li>

                  <li>
                    <a href="https://www.concept-image.fr/blog/eco-couleurs/">
                      "Eco-couleurs : une charte graphique éco-responsable pour
                      le web et le print" (Concept Image)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.concept-image.fr/blog/eco-couleurs/">
                      "Les bonnes pratiques pour éco-concevoir un site web"
                      (UseWeb)
                    </a>
                  </li>
                  <li>
                    <a href="https://dear-sunflower.com/">
                      Blog de Dear SunFlower - Studio Graphique Engagé
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.hello-bokeh.fr/2023/01/12/accessibilite-et-typographie-quest-ce-quune-police-de-caracteres-accessible/">
                      "Accessibilité et typographie : qu’est-ce qu’une police de
                      caractères accessible ?" (Hello-bokeh)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.light-communication.fr/">
                      Site web Light. - Communication Responsable Angers
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/orgs/community/discussions/64778">
                      "Tips for Making your GitHub Profile Page Accessible"
                      (GitHub Community)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop}>
            &#8679;
          </button>
        </div>
      )}
    </>
  );
}

export default CSR;
