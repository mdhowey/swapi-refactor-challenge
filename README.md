<img src="https://i.imgur.com/go18uJE.jpg">

# Star Wars API - React Router & useEffect practice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://www.swapi.tech/) and render its data. Create a new react app in this folder. 

## Core Goals
1. Obtain all of the starships from the API. Use `useEffect` to make the request as soon as your topmost-level component loads, and store it in state.
1. For each one ship in state, render a `<Link>` in for that starship. The link should lead to `/ships/<theSelectedShipsId>`, and display the ship's name.
1. When a starship `<Link>` is clicked, a `<StarshipPage>` component should be rendered. Pass into the StarshipPage the id parameter from the url. Take a look at the answers from last week's React Router codealong and use it as a guide (https://git.generalassemb.ly/SEIR-1011/react-router-deliverable/tree/joel-answers)

1. When the StarshipPage component loads, it should make a request to get the full details about the specified ship. Display that ship's name, model, manufacturer, and any other attributes you find interesting.
1. The StarshipPage should have a "Return to Starship List" link. Hint: you'll need a route that displays your list component

1. Now it's time to connect your React app to a pre-built backend: 
    ```js
    git clone git@git.generalassemb.ly:SEIR-1011/react-star-wars-api-backend.git
    cd react-star-wars-api-backend
    createdb react-star-wars-api-backend
    npm run start
    ```
1. Open Postman and test that your routes work. 

1. User Stories:

    - I can go to the All Ships page and see a list of all ships, fetched from https://www.swapi.tech/
    - I can filter this list using a search bar
    - Each ship on this page has a Save button next to it
    - When I click the Save button, the ship is added to my Saved Ships list via a POST to the backend
    - An already-saved ship has its Save button replaced with an icon that indicates that I've already saved it
    - I can go to the Saved Ships page and see a list of all my saved ships (fetched from the backend)

## Stretch Goals
 
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship. This will require making a request for each pilot in the ship's pilots list. (Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, show a No Pilots message.)
1. For each of the faved pokemon, I see additional data from the api (types, stats, image, etc)
1. I can click the already-faved icon for any pokemon and remove it from my faves

