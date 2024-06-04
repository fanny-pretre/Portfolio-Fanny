import { useMediaQuery } from "react-responsive";

import Work from "../components/Work";
import HeaderBis from "../components/HeaderBis";
import HeaderDesktop from "../components/HeaderDesktop";

function Experience() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px) and (max-width: 1600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  return (
    <>
      {isTabletOrMobile && (
        <div>
          <HeaderBis />
          <h2> Mon parcours</h2>
          <Work />
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <h2> Mon parcours</h2>
          <Work />
        </div>
      )}
    </>
  );
}

export default Experience;
