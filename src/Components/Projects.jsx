import "../styles/projects.css";
import Card from "./Card";

import React from "react";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h1>Projects</h1>
        <Card
          image="https://i.imgur.com/XaAlzaY.png"
          title="Netflix Clone"
          info="Netflix clone made using React and TMDB API. This app fetches the movies data from TMDB database. I have used plain CSS to style the components and make it look like the original Netflix website."
          tags={["HTML", "CSS", "JavaScript", "React"]}
          demourl="https://netflixclone-m.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/netflix-clone"
          target="_blank"
        />
        <Card
          image="https://i.imgur.com/DpoYBH8.png"
          title="Movies Finder App"
          info="Search for movies and get their synopsis, ratings, release dates etc. This one was also made by making use of the TMDB API. It fetches the movies data based on what user types on the search box. It was styled using a React library called Styled Components."
          tags={["HTML", "CSS", "JavaScript", "React"]}
          demourl="https://movies-finder-m.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/movies-finder"
          target="_blank"
        />
        <Card
          image="https://i.imgur.com/guVeDV5.png"
          title="Kosmik Imagery"
          info="Kosmik Imagery shows a unique picture each day from NASA's astronomy picture of the day API. It was made using HTML, vanilla CSS, Bootstrap and vanilla JS"
          tags={["HTML", "CSS", "JavaScript", "Bootstrap"]}
          demourl="https://kosmikimagery.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/kosmikimagery"
          target="_blank"
        />
        <Card
          image="https://i.imgur.com/VwnLwh2.png"
          title="Techsnap Blog Layout"
          info="A simple blog post layout I made using HTML and vanilla CSS. It was a task given by the organization Techsnap."
          tags={["HTML", "CSS", "JavaScript"]}
          demourl="https://techsnap.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/techsnap-task"
          target="_blank"
        />
        <Card
          image="https://i.imgur.com/IfB7RHO.png"
          title="Todo App"
          info="A simple site that displays the characters from the popular show Game of Thrones."
          tags={["HTML", "CSS", "JavaScript", "Bootstrap"]}
          demourl="https://got-characterss.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/got-characters"
          target="_blank"
        />
        {/* <Card
          image="https://i.imgur.com/L5oambl.png"
          title="Tic Tac Toe Game"
          info="A tic-tac-toe game made using HTML, CSS and Vanilla JavaScript."
          tags={["HTML", "CSS", "JavaScript"]}
          demourl="https://tictactoe-game-md.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/tic-tac-toe"
          target="_blank"
        /> */}
        {/* <Card
          image="https://i.imgur.com/aNAeEKX.png"
          title="Rock Paper Scissors Game"
          info="A rock paper scissors game made using HTML, CSS and Vanilla JavaScript."
          tags={["HTML", "CSS", "JavaScript"]}
          demourl="https://rockpaperscissors-game-md.netlify.app/"
          githuburl="https://github.com/mandeepdebnath/rock-paper-scissors"
          target="_blank"
        /> */}
        {/* <Card
          image="https://i.imgur.com/Sp18pBU.png"
          title="Meditation App"
          info="A meditation app made using HTML, CSS and Vanilla JavaScript that plays relaxing sounds to meditate."
          tags={["HTML", "CSS", "JavaScript"]}
          demourl="https://mandeepdebnath.github.io/meditation-app/"
          githuburl="https://github.com/mandeepdebnath/meditation-app"
          target="_blank" 
        />*/}
      </section>
    </>
  );
};

export default Projects;
