exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const bullets = [
    {
      project_id: "1",
      bullet: "Page tested with react testing library",
    },
    {
      project_id: "1",
      bullet: "Click show title to expose show selection dropdown",
    },
    {
      project_id: "1",
      bullet: "Explore tv favorites with episode synopsis for every season",
    },
    {
      project_id: "2",
      bullet: "Page tested with react testing library",
    },
    {
      project_id: "2",
      bullet: "Click show title to expose show selection dropdown",
    },
    {
      project_id: "2",
      bullet: "Explore tv favorites with episode synopsis for every season",
    },
    {
      project_id: "3",
      bullet: "Single Page Web React Application made with react-redux",
    },
    {
      project_id: "3",
      bullet: "Fetching weather data from MetaWeather api",
    },
    {
      project_id: "3",
      bullet: "Custom built weather icons with animations",
    },
    {
      project_id: "4",
      bullet: "Single Page Web Application",
    },
    {
      project_id: "4",
      bullet: "Calendar driven navigation",
    },
    {
      project_id: "4",
      bullet: "Implements useHistory and useParams from react-router-dom",
    },
    {
      project_id: "5",
      bullet: "Browser remembers dark mode setting",
    },
    {
      project_id: "5",
      bullet: "Built onto existing Crypto App",
    },
    {
      project_id: "6",
      bullet: "Pulling data from Github api",
    },
    {
      project_id: "6",
      bullet: "Search bar to search for users",
    },
    {
      project_id: "7",
      bullet: "Sprint challenges are completed under 3 hours",
    },
    {
      project_id: "7",
      bullet: "Custom Styled cards",
    },
    {
      project_id: "7",
      bullet:
        "Moving the mouse over the character image will reveal if they’re dead",
    },
    {
      project_id: "8",
      bullet: "Made from default react boilerplate",
    },
    {
      project_id: "8",
      bullet: "App will accept and display data",
    },
    {
      project_id: "9",
      bullet: "Allows user to make custom list",
    },
    {
      project_id: "9",
      bullet: "Long click to edit",
    },
    {
      project_id: "9",
      bullet: "Select and tag multiple items for removal",
    },
    {
      project_id: "10",
      bullet: "Array used to manage brick placement",
    },
    {
      project_id: "10",
      bullet: "Made from scratch with tutorial aid",
    },
    {
      project_id: "11",
      bullet: "Built from expanding existing code",
    },
    {
      project_id: "11",
      bullet: "Made with tutorial aid",
    },
    {
      project_id: "11",
      bullet: "Built all sprites in game",
    },
    {
      project_id: "12",
      bullet: "Sprint challenges are completed under 3 hours",
    },
    {
      project_id: "12",
      bullet: "CSS driven animations",
    },
  ];

  return knex("bullets")
    .insert(bullets)
    .then(() => console.log("\n== Seed data for bullets table added. ==\n"));
};
