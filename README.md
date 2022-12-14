**REACT WEATHER APP**

This is a simple app to search current weather conditions around the world.

---

**Installation:**

This app is built with React using `create-react-app`.

First clone this repo into a folder on your local machine. Some aspects of the app utilise a library called react-icons. To install react-icons, navigate to the app's folder in your terminal and run `npm install react-icons`.

With react-icons installed, to run this app, ensure you are in the app's folder in your terminal and run `npm start` or `yarn start`.

Once the app is compiled it should open in a browser window.

---

**Using the app**

Using the app is fairly straightforward. There is a search bar at the top of the page; enter the name of the city whose weather you want to view, and press enter to search. The app will return weather results for just about any city in the world (the API can access data for over 200,000 cities). The app utilises an API from [Open Weather Map](https://openweathermap.org/) to retrieve and display data for weather conditions worldwide.

_Note_: There are instances where cities in different countries will share the same name, for example there is a Melbourne in Australia and in the USA. In these situations you can add a country code to your search term to ensure you get results for the correct city. Your search will need to be formatted as "City", "Country Code". For example, `Melbourne, AU` or `Melbourne, US`. A list of valid country codes can be found [here](https://www.iso.org/obp/ui/#search/code).

The weather conditions tracked by the app are:

- Temperature (in Celsius) - Current, minimum, maximum, and "feels like" temperature.
- Wind speed
- Pressure
- Humidity

---

**Planned Updates**

- Incorporate Typescript into the next build
- Improve the responsive scaling of text content
- To improve security, find a method to exclude the API from the repo without forcing users to sign up for their own API and edit the code themselves before using the app.
