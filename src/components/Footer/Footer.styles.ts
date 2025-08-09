import styled from "styled-components";
const PRIMARY = "#fd4a4a";
const SURFACE = "#fafafa";
const BG = "#25252a";
const TEXT = "#e6eef8";

export const FooterSection = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, ${BG} 0%, #071025 100%);
  color: ${TEXT};
  padding: 4rem 1rem 2rem;
  box-shadow: 0 -6px 30px rgba(2, 6, 23, 0.6);
  font-family: Mulish;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  backdrop-filter: blur(6px);
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  min-width: 240px;
`;

export const BrandLogo = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
`;

export const BrandText = styled.div`
  font-weight: 700;
  font-size: 1.05rem;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 1.2rem;
  width: calc(100% - 280px);

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const ColumnTitle = styled.h4`
  margin: 0;
  font-size: 0.95rem;
  color: ${TEXT};
  opacity: 0.95;
`;

export const NavLink = styled.a`
  color: rgba(230, 238, 248, 0.9);
  text-decoration: none;
  font-size: 0.92rem;
  transition:
    color 180ms ease,
    transform 180ms ease;
  opacity: 0.9;

  &:hover {
    color: ${PRIMARY};
    transform: translateX(6px);
  }
`;

export const SubscribeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SubscribeForm = styled.form`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-family: Mulish;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SubscribeInput = styled.input`
  flex: 1;
  min-width: 0;
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
  color: ${TEXT};
  outline: none;
  font-size: 0.95rem;

  &::placeholder {
    color: rgba(230, 238, 248, 0.5);
  }
`;

export const SubscribeButton = styled.button`
  background: linear-gradient(90deg, ${PRIMARY}, #ff6b6b);
  border: none;
  font-family: Mulish;
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(253, 74, 74, 0.18);
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(253, 74, 74, 0.18);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.01),
    rgba(255, 255, 255, 0.005)
  );
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

export const SocialButton = styled.a`
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
  color: ${TEXT};
  font-size: 0.95rem;
  text-decoration: none;
  transition:
    transform 160ms ease,
    background 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    transform: translateY(-4px);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.01)
    );
    box-shadow:
      0 10px 30px rgba(2, 6, 23, 0.6),
      0 6px 18px rgba(253, 74, 74, 0.12);
    color: ${PRIMARY};
  }
`;

export const Copyright = styled.div`
  font-size: 0.92rem;
  color: rgba(230, 238, 248, 0.75);
`;

export const Credits = styled.div`
  font-size: 0.9rem;
  color: rgba(230, 238, 248, 0.6);
`;

export default null;
