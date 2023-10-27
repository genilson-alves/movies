import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Overpass', sans-serif;
  }

  body {
    background-color: #edede9;    
  }
`;

export const Logo = styled.div`
  padding: 25px;
  img {
    max-width: 90px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: auto;
`;

export const NavigationWrapper = styled.div`
  text-align: center;
  background-color: #0077b6;
  height: 7vh;
`;

export const NavigationLinks = styled.div`
  display: inherit;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const NavigationLink = styled.a`
  font-size: 1rem;
  color: #ced4da;
  padding: 25px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationOptions = styled.div`
  display: inherit;
`;

export const NavigationUser = styled.div`
  display: inherit;
`;

export const Loading = styled.div`
  text-align: center;
  margin: 50px;
  color: blue;
  font-size: 1.5rem;
`;

export const Error = styled.div`
  text-align: center;
  margin: 50px;
  color: red;
  font-size: 1.5rem;
`;

export const Main = styled.main`
  max-width: 1700px;
  margin: auto;
`;

export const FeaturedMovies = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FeaturedContent = styled.div`
  display: flex;
  margin: auto;
  padding: 50px;
  border-radius: 40px;
`;

export const FeaturedPoster = styled.div`
  flex: 1;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const FeaturedOverview = styled.div`
  flex: 4;
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FeaturedInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeaturedTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0077b6;
`;

export const FeaturedSynopsis = styled.div``;

export const FeaturedReleaseDate = styled.div``;

export const Score = styled.div`
  font-weight: bold;
  background-color: #06d6a0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 70px;
  height: 70px;
  gap: 20px;
  border-radius: 10px;
`;

export const Title = styled.div``;
export const Poster = styled.div`
  width: 15vh;
  img {
    border-radius: 7px;
    width: 100%;
  }
`;

export const SectionTitle = styled.div`
  margin: 10px 30px;
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const Popular = styled.div``;

export const UpcomingContainer = styled.div`
  display: flex;
  margin: 0px 30px;
  flex-direction: row;
  gap: 20px;
  overflow: scroll;
`;

export const Upcoming = styled.div`
  padding: 15px 0px;
`;

export const Airing = styled.div``;

export const Footer = styled.footer`
  background-color: black;
  height: 300px;
  padding: 30px;
  color: white;
`;
