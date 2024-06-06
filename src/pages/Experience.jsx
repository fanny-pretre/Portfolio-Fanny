import { useMediaQuery } from "react-responsive";

import Work from "../components/Work";
import HeaderBis from "../components/HeaderBis";
import HeaderDesktop from "../components/HeaderDesktop";

function Experience() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <>
      {isTabletOrMobile && (
        <div>
          <HeaderBis />
          <Work />
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <HeaderDesktop />
          <Work />
        </div>
      )}
    </>
  );
}

export default Experience;
