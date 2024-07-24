import Virtuart from "../assets/Virtuart.webp";
import Mexico from "../assets/Mexico.webp";
import Virtuartdetail from "../assets/Virtuartdetail.webp";
import Globe from "../assets/Globe-Guide.webp";
import NBA from "../assets/NBA.webp";
import Taupe from "../assets/Taupe.webp";
import Yoga from "../assets/yoga-chevre.webp";
import Voiture from "../assets/voiture.webp";
import SkyHook from "../assets/SkyHook.webp";
import WhacAMole from "../assets/WhacAMole.webp";
import HideAway from "../assets/Hide Away.webp";
import Geocode from "../assets/Geocode.webp";
import Lapin from "../assets/Lapin.webp";
import LeTerrier from "../assets/LeTerrier.webp";

const projects = [
  {
    id: 1,
    name: "Virtu'ART",
    image: Virtuart,
    imagealt:
      "Photo d'une fresque de Lady Pink réalisé à WellingCourt et représentant une déesse inca ",
    imagedetail: Virtuartdetail,
    imagedetailalt:
      "Photo représentant l'interface de Virtu'Art. On y voit l'oeuvre Mother Moon de Thomas Dambo ",
    labels: "HTML5, CSS3, JS Vanilla",
    desc: "Plongez dans un monde où l'art rencontre la technologie avec Virtu'Art. Cette galerie d'art virtuelle offre une expérience immersive unique, où vous pouvez explorer des œuvres d'art exceptionnelles sans quitter le confort de votre maison.",
    github: "https://github.com/fanny-pretre/art-galery-2",
    prod: "https://fanny-pretre.github.io/art-galery-2/",
  },
  {
    id: 2,
    name: "Globe Guide",
    image: Mexico,
    imagealt:
      "Photo d'une ville au Mexique avec un grand batiment jaune en premier plan",
    imagedetail: Globe,
    imagedetailalt:
      "Photo représentant l'interface de Globe Guide. On y voit des informations concernant 3 pays : le Mexique, le Vietnam et le Royaume-Uni  ",
    labels: "Sass, API, React JS",
    desc: `Avec Globe Guide, vous pouvez explorer plus de 100 pays à travers le monde en toute simplicité. Notre plateforme intègre différentes API pour vous fournir des informations complètes sur les taux de change, les prévisions météorologiques et les jours fériés, afin que vous disposiez de tous les détails nécessaires pour planifier votre voyage parfait. "Travel far enough, you meet yourself" alors attachez votre ceinture et voyagez avec la communauté Globe Guide !  `,
    github:
      "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P2-Team1",
    prod: "https://globe-guide.netlify.app/",
  },
  {
    id: 3,
    name: "SkyHook",
    image: NBA,
    imagealt: "Photo représentant un joueur de NBA sur le terrain",
    imagedetail: SkyHook,
    imagedetailalt:
      "Photo représentant l'interface de SkyHook. On y voit un tableau avec toutes les équipes de NBA par conférence ",
    labels: "Sass, API, React JS",
    desc: "En cours de développement - SkyHook est le site qu'il vous faut pour tout ce qui touche au basket. Alimenté par une API, SkyHook vous donne accès à une multitude de données et de ressources sur l'histoire de la NBA, sur les joueurs, les équipes... Que vous soyez un fan avide cherchant à compléter vos connaissances un entraîneur en quête d'analyses approfondies ou un rookie curieux, SkyHook est là pour vous guider! Plongez dans l'univers dynamique du basket-ball avec SkyHook et vivez chaque dribble, chaque tir et chaque victoire comme jamais auparavant.",
    github: "https://github.com/fanny-pretre/nba-project",
  },
  {
    id: 4,
    name: "WhacAMole",
    image: Taupe,
    imagealt: "Image représentant une taupe du jeu vidéo Mario",
    imagedetail: WhacAMole,
    imagedetailalt:
      "Photo représentant l'interface de WhacAMole. On y voit une taupe et une plante carnivore dans le style Mario ",
    labels: "Java",
    desc: "En cours de développement - Plongez dans l'univers amusant de ce petit jeu de tape-taupe développé en Java ! Armé de votre marteau virtuel, votre mission est simple : tapez sur les taupes qui surgissent de leurs trous aussi rapidement que possible pour marquer des points. Affûtez vos réflexes et montrez à ces taupes qui est le patron ! Téléchargez-le dès maintenant et commencez à taper !",
    github: "https://github.com/fanny-pretre/WhacAMole",
  },
  {
    id: 5,
    name: "Hide Away",
    image: Yoga,
    imagealt:
      "Image représentant une femme en legging qui fait du Yoga avec une chèvre",
    imagedetail: HideAway,
    imagedetailalt:
      "Photo représentant l'interface de HideAway. On y voit des chèvres ainsi que des boutons pour voir toutes les activités, faire le quizz, se connecter et s'enregistrer.",
    labels: "Sass, React JS, PHP",
    desc: "Découvrez Hide Away, votre nouveau guide pour des destinations de vacances insolites, conçu spécialement pour les aventuriers en quête de nouveautés. Ce projet innovant, développé en moins de 30 heures lors d'un hackathon, utilise PHP et React pour offrir une expérience fluide et interactive. Grâce à un questionnaire intelligent, Home Away analyse vos préférences et vous propose des destinations uniques et surprenantes, loin des sentiers battus. ",
    github: "https://github.com/WildCodeSchool-2024-02/HideAway",
    prod: "https://hide-away-seven.vercel.app/",
  },
  {
    id: 6,
    name: "Geocode",
    image: Voiture,
    imagealt: "Image représentant une voiture électrique",
    imagedetail: Geocode,
    imagedetailalt: "Image représentant une voiture electrique en format icône",
    labels: "Sass, React JS, MySQL, Express",
    desc: "Avec Geocode, transformez vos trajets en une expérience fluide et efficace. Notre plateforme vous aide à planifier et optimiser vos déplacements en vous proposant des bornes de recharge pour véhicules électriques avec des données mises à jour en temps réel. Geocode s'engage à démocratiser l’usage de la voiture électrique, en adoptant une logique de partage et de durabilité. Rejoignez-nous dans notre mission pour un avenir plus vert et plus connecté. Planifiez, optimisez et partez en toute tranquillité avec Geocode !",
    github:
      "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P3-GeoCode",
    prod: "https://geo-code.remote-fr-2.wilders.dev/",
  },
  {
    id: 7,
    name: "Le Terrier",
    image: Lapin,
    imagealt: "Image représentant un lapin",
    imagedetail: LeTerrier,
    imagedetailalt:
      "Image représentant un lapin avec la devise et le logo du Terrier",
    labels: "Sass, React JS, MySQL, Express",
    desc: "Le Terrier est une association dédiée à la protection et au bien-être des lapins abandonnés et maltraités. Notre mission est de recueillir, soigner et trouver des foyers aimants pour ces petits animaux souvent méconnus. Nous croyons fermement que chaque lapin mérite une chance de vivre heureux et en sécurité. Grâce à l'engagement de nos bénévoles et au soutien de notre communauté, nous offrons une seconde chance à de nombreux lapins chaque année.",
    github: "https://github.com/fanny-pretre/CP4",
  },
];

export default projects;
