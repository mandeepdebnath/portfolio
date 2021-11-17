import "../styles/projects.css";
import Card from "./Card";

import React from "react";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <Card
          image="https://i.imgur.com/XaAlzaY.png"
          title="Netflix Clone"
          info="Netflix clone made using React and API. This app fetches the movies data from TMDB database. I have used plain CSS to style the components and make it look like the original Netflix website."
        />
        <Card
          image="https://i.imgur.com/39ctKlp.png"
          title="Google Search Clone"
          info="Google search clone made using React and search API. This app was made by making use of the search API available in RapidAPI Hub. This project was a learning process while following a course so that I get used to using APIs and React hooks. I have used TailwindCSS for the purpose of quick styling of the components. It also has dark/light mode toggle."
        />
        <Card
          image="https://i.imgur.com/DpoYBH8.png"
          title="Movies Finder App"
          info="Search for movies and get their synopsis, ratings, release dates etc. This one was also made by making use of the TMDB API. It fetches the movies data based on what user types on the search box. It was styled using using a React library called Styled Components"
        />
      </section>
    </>
  );
};

export default Projects;
