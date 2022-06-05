# How to run Chatbot

## Clone the server repository

Clone from here [https://github.com/dadanisme/chatbot-server](https://github.com/dadanisme/chatbot-server), or Simply

    git clone https://github.com/dadanisme/chatbot-server.git

## Run the server

This needs pip to be installed on your system. Go [https://pypi.org/](https://pypi.org/) if pypi is not installed. \
\
Go to `chatbot-server` directory

```
cd chatbot-server
```

Install required dependencies from `requirements.txt`

```
pip install -r requirements.txt
```

Run the server on localhost

```
flask run --cert=adhoc
```

## Connect to the server

Go to [https://127.0.0.1:5000/](https://127.0.0.1:5000/) then Advance to open Unsecure Server./
Don't worry, this is totally safe.

## Clone this repository

    git clone https://github.com/dadanisme/chatbot-client.git

## Run the client

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

## Open the Client (Instant)

If you don't want to run on development environment, just open the deployed apps at [https://project-fanisa.web.app](https://project-fanisa.web.app)
