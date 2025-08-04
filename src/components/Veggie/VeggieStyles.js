import styled from "styled-components";
export const Section = styled.div`
  background: var(--white);
  padding: 25px;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  h3 {
    margin: 0;
    font-size: 2.5rem;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  border-radius: 1rem;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  min-width: 150px;
  width: 190px; /* fix width for carousel, adjust as needed */
  height: 240px; /* absolute control over card height */
  transition: transform 0.16s, box-shadow 0.16s;
  position: relative;
  @media (max-width: 567px) {
    width: 80vw; // use most of the viewport
    min-width: 0;
    max-width: 95vw;
    height: 210px; // smaller height for mobile
  }
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 30px rgba(46, 213, 115, 0.14);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 120px; /* fixed image height */
  object-fit: cover;
  display: block;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: #fff;
  @media (max-width: 567px) {
    width: 100%;
    height: 110px;
    max-width: 100%;
  }
`;

export const CardTitle = styled.p`
  margin: 0;
  padding: 0.8rem 0.8rem;
  font-size: 1.02rem;
  font-weight: 700;
  color: #222;
  text-align: center;
  background: #fff;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  height: 120px; /* take up rest of card (240-120px image) */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* max 3 lines */
  -webkit-box-orient: vertical;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 8px rgba(46, 213, 115, 0.03);
  position: relative;
  z-index: 2;
  @media (max-width: 567px) {
    font-size: 0.98rem;
    padding: 0.6rem 0.5rem;
    height: 90px;
    -webkit-line-clamp: 2;
  }
`;
