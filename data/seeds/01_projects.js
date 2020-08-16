exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const projects = [
    {
      img: "https://elijah-atkins.github.io/img/starwars-api.png",
      title: "React Query Star Wars API",
      url: "https://starwars-info.vercel.app/",
      git: "https://github.com/elijah-atkins/starwars-api",
      description:
        "Explore information about the star wars universe from swapi.dev Built using React Query and react-router-dom",
      bullets:
        "Page tested with react testing library|Click show title to expose show selection dropdown|Explore tv favorites with episode synopsis for every season",
    },
    {
      img: "https://elijah-atkins.github.io/img/react-tv.png",
      title: "React Television Favorites",
      url: "https://react-tv-show.now.sh/",
      git: "https://github.com/elijah-atkins/React-Testing-TV-Show",
      description:
        "Built off of existing code to expanded app functionality, added show selection function and styles Built using React, axios, react-dropdown",
      bullets:
        "Page tested with react testing library|Click show title to expose show selection dropdown|Explore tv favorites with episode synopsis for every season",
    },
    {
      img: "https://elijah-atkins.github.io/img/weather.png",
      title: "React Redux Weather App",
      url: "https://react-redux-app.elijah-atkins.now.sh/",
      git: "https://github.com/elijah-atkins/React-Redux-App",
      description:
        "Custom built weather app with custom weather icons and weather animations. Built using React, axios, redux, thunk, and SCSS.",
      bullets:
        "Single Page Web React Application made with react-redux|Fetching weather data from MetaWeather api|Custom built weather icons with animations",
    },
    {
      img: "https://elijah-atkins.github.io/img/nasa.png",
      title: "NASA Astronomy Picture of the Day",
      url: "https://nasa-photo-of-the-day.elijah-atkins.now.sh/",
      git: "https://github.com/elijah-atkins/nasa-photo-of-the-day",
      description:
        "Explore the NASA apod api with beautiful astronomy images with posts as far back as 1995! Built using React, axios, react-router-dom, SCSS, and react-calander.",
      bullets:
        "Single Page Web Application|Calendar driven navigation|Implements useHistory and useParams from react-router-dom",
    },
    {
      img: "https://elijah-atkins.github.io/img/dark-mode.png",
      title: "Dark Mode",
      url: "https://dark-mode.elijah-atkins.now.sh/",
      git: "https://github.com/elijah-atkins/dark-mode",
      description:
        "Implemented a dark mode feature to existing code. Built using React, with a custom hook to use browsers local storage to remember state.",
      bullets:
        "Browser remembers dark mode setting|Built onto existing Crypto App",
    },
    {
      img: "https://elijah-atkins.github.io/img/github.png",
      title: "Github Usercard",
      url: "https://react-github-user-card.elijah-atkins.now.sh/",
      git: "https://github.com/elijah-atkins/React-Github-User-Card",
      description:
        "Shows a profile card for Github users with a list of followers/following. Built using React, SCSS, and axios.",
      bullets: "Pulling data from Github api|Search bar to search for users",
    },
    {
      img: "https://elijah-atkins.github.io/img/rick-and-morty.png",
      title: "React and Morty",
      url: "https://sprint-challenge-react-rick-and-morty.now.sh/",
      git: "https://github.com/elijah-atkins/Sprint-Challenge-React-Wars",
      description:
        "Lambda School Sprint Challenge pulling data from the  Rick and Morty API  to show  a List of Rick and Morty characters. Built using React, SCSS, and axios.",
      bullets:
        "Sprint challenges are completed under 3 hours|Custom Styled cards|Moving the mouse over the character image will reveal if they’re dead",
    },
    {
      img: "https://elijah-atkins.github.io/img/team-builder.png",
      title: "Team Builder",
      url: "https://team-builder.elijah-atkins.now.sh",
      git: "https://github.com/elijah-atkins/team-builder",
      description:
        "Team Builder app uses forms to input data that will generate cards with data onto page. Built using Create React App and SCSS.",
      bullets:
        "Made from default react boilerplate|App will accept and display data|Allows user to make custom list",
    },
    {
      img: "https://elijah-atkins.github.io/img/react-todo.png",
      title: "React ToDo",
      url: "https://react-todo.elijah-atkins.now.sh/",
      git: "https://github.com/elijah-atkins/React-Todo",
      description:
        "ToDo lists a simple app made to explore CRUD (create, read, update, delete). Built using React, SCSS and javaScript.",
      bullets: "Long click to edit|Select and tag multiple items for removal",
    },
    {
      img: "https://elijah-atkins.github.io/img/paddle-ball.png",
      title: "Paddle Ball",
      url: "https://elijah-atkins.github.io/Paddle-Ball-Game/paddle-ball.html",
      git: "https://github.com/elijah-atkins/Paddle-Ball-Game",
      description:
        "Programming exercise making Brick breaker style game. Built using javaScript, HTML5 canvas and CSS.",
      bullets:
        "Array used to manage brick placement|Made from scratch with tutorial aid",
    },
    {
      img: "https://elijah-atkins.github.io/img/racing-game.png",
      title: "Racing Game Demo",
      url: "https://elijah-atkins.github.io/Paddle-Ball-Game/racing-game.html",
      git:
        "https://github.com/elijah-atkins/Paddle-Ball-Game/blob/master/js/racing-game.js",
      description:
        "Simple racing game demo made from building upon Paddle ball game. Built using javaScript, HTML5 canvas and CSS.",
      bullets:
        "Built from expanding existing code|Made with tutorial aid|Built all sprites in game",
    },
    {
      img: "https://elijah-atkins.github.io/img/space-walkers.png",
      title: "Advanced CSS Lambda Sprint Challenge",
      url: "https://sprint-challenge-advanced-css-flax.now.sh/",
      git: "https://github.com/elijah-atkins/Sprint-Challenge--Advanced-CSS",
      description:
        " Starting from non styled html add CSS to style document to expected output. Built using HTML5 and LESS compiler.",
      bullets:
        "Sprint challenges are completed under 3 hours|CSS driven animations",
    },
  ];

  return knex("projects").insert(projects);
  //   .then(() => console.log("\n== Seed data for projects table added. ==\n"));
};
