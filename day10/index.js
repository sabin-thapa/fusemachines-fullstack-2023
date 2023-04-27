const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const EXPIRATION_TIME = 3600;

const app = express();
app.use(express.json());
const client = redis.createClient({ host: "localhost", port: REDIS_PORT });

client.on("connect", () => {
  console.log("Connected to Redis");
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});


//Set HTML Response
const setResponse = (username, repos) => {
  return `<h1> ${username} has ${repos} public repos. </h1>`;
};

const getRepos = async (req, res, next) => {
  try {
    console.log("Fetching data!");
    const { username } = req.params;
    console.log(username, "username");
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const repos = data.public_repos;

    //Setting data to redis
    await client.set(username, repos, "EX", EXPIRATION_TIME);

    res.send(setResponse(username, repos));
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error!");
  }
};

//Caching middleware
const cache = async (req, res, next) => {
  const { username } = req.params;
  await client.get(username, (err, data) => {
    if (err) {
      console.error(err);
      return next();
    }
    if (data !== null) {
      console.log("CACHED DATA");
      res.send(setResponse(username, data));
    } else {
      next();
    }
  });
};

app.get("/users/:username", cache, getRepos);

app.listen(PORT, () => console.log("Server started on port:", PORT));
