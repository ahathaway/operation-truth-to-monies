# operation-truth-to-monies

This project was began with `npx create-react-app`, which allowed us to bootstrap the React setup and get working, rather than configuring endlessly. The option to eject from this cookie-cut environment is available, but that will be reserved for when the project is at a place where it requires further customization of the build/setup.

---

## How to setup
- Run `npm install` in root folder

For development, you have a few options for running the app:
1. Run React app +  Node server (Running the complete app, properly)
    - First tab, run `npm run server`
    - Second tab, run `npm start`
2. Run only Node server (Testing backend alone, not messing with the React app)
    - Run `npm run server`
3. Run React app + [json-server](https://github.com/typicode/json-server) (This is nice for working with mock data before Node backend is functional)
    - First tab, run `json-server -p 4000 test_json/confessions.json`
    - Second tab, run `npm start`


For option #1, the backend and frontend run on the same server, and the frontend will proxy over to the API.

For development purposes, this is going to work and allow us to easily build this thing with less overhead. As it grows, we will need to find another method.

It seems the most reasonable solution is to separate the backend and frontend into separate applications, but that is TBD.

---

## How to run production build

When we are interested in throwing this on a live server, I am quite certain this process will allow us to do so. It is likely not suitable for long term use, but good for testing.

- Run `npm run build` which compiles all of the React code in the build/ folder
- Run `npm run server`, this will run the API as usual but also serve the React app from all other endpoints that are not explicitly written in the api.