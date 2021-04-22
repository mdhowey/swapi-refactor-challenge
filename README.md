<img src="https://i.imgur.com/go18uJE.jpg">

# Star Wars API - React Router & useEffect practice

---

## Intro

In this deliverable, you'll consume the [Star Wars API](https://www.swapi.tech/) and render its data.

## Set Up

To get set up:

- Use `create-react-app` to create a React app named `react-star-wars`
- `cd` into `react-star-wars` and open VS Code.
- Open a terminal in VS Code.
- Start the React Dev Server.

## Core Goals
1. Obtain all of the starships from the API. For each one, render a clickable `<Link>` in `<App>` for each starship. The link should lead to `/ships/<theSelectedShipsId>`, and display the ship's name. 

2. When a starship `<Link>` is clicked a `<StarshipPage>` component should be rendered. Pass into the StarshipPage the id parameter from the url (remember that this comes from the argument to your Route's `render` function).

3. When the StarshipPage component loads, it should make a request to get the full details about that starship. Display that ship's name, model, manufacturer, and any other attributes you find interesting.

4. The StarshipPage should have a "Return to Starship List" link.

## Stretch goals
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.

2. Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship. This will require making a request for each pilot in the ship's pilots list. (Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, show a No Pilots message.)
