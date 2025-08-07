import React from "react";
import {
  HomeThreeSection,
  UpperBound,
  UpperLeft,
  UpperRight,
  Logo,
  MainHeading,
} from "./Home3.styles";
const Home3 = () => {
  return (
    <HomeThreeSection>
      <UpperBound>
        <UpperLeft>
          <Logo></Logo>
          <MainHeading></MainHeading>
        </UpperLeft>
        <UpperRight></UpperRight>
      </UpperBound>
    </HomeThreeSection>
  );
};

export { Home3 };
