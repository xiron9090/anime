import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelecAnimePage } from "./selectors";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justiy-conten: spaace-evenly;
  flex-wrap:wrap;
`;
const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items:center
`;
const AnimeCover = styled.div`
  width: auto;
  height: 10em;
  img {
    width: auto;
    height: 100%;
  }
`;
const AnimeTitle = styled.h6`
  font-size: 15px;
  color: #000;
  margin-top: 8px;
  font-weight: 500;
`;
const stateSelector = createSelector(makeSelecAnimePage, (animePage) => ({
  animePage,
}));
export function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);
  const isEmptyAnimedPage =
    !animePage || !animePage.media || animePage.media.length === 0;
    if(isEmptyAnimedPage) return <div>Loading...</div>
  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItemContainer key={anime?.id}>
            <AnimeCover>
              <img src={anime?.coverImage?.extraLarge || ""} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  );
}
