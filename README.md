# How to run Chatbot Client

This will also need to the `server` to run. Here is the repository for server [https://github.com/dadanisme/chatbot-server](https://github.com/dadanisme/chatbot-server). \
Just ignore this if you have already running server.

## Run on localhost

This will run server on your localhost using `Flask`

### Clone this repository

    git clone https://github.com/dadanisme/chatbot-client.git

### Run the client

This will requires Node.js installed on your system. Install from here [https://nodejs.org/en/](https://nodejs.org/en/)\
\
Go to `chatbot-client` directory

```
cd chatbot-client
```

Install required modules from `packages.json`

```
npm install
```

Run the client

```
npm start
```

## Edit server address

### Open `src/App.js`

Then go ahead to `Line 14` and change the `serverAddress` value to your server address

```javascript
const [serverAddress] = useState(
  "https://chatbot-server-ayang.herokuapp.com/" //change this line
);
```

## Deployed web

If you don't want to run on development environment, just open the deployed apps at [https://project-fanisa.web.app](https://project-fanisa.web.app)
