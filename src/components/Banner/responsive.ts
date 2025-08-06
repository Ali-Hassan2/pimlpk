// responsive.ts
import { css } from "styled-components";

const responsive = css`
  @media (max-width: 1200px) {
    font-size: 4.5vw;
  }

  @media (max-width: 768px) {
    font-size: 7vw;
  }

  @media (max-width: 480px) {
    font-size: 8vw;
  }
`;

export  {responsive};
