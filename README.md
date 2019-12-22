# react-redux-saga-aulion

React/Redux-with-saga
---



# Installation
cd myproject/ <br />
git clone https://github.com/flosisa/react-redux-saga-aulion.git

cd react-redux-saga-aulion/ <br />
npm install

# Before starting the engine!
- if environment DEV_SERVER_INT exists use it, or 127.0.0.1 <br />
const HOST = process.env.DEV_SERVER_INT || '127.0.0.1'

- if environment DEV_SERVER_PORT exists use it, or 8008 <br />
const PORT = process.env.DEV_SERVER_PORT || 8008

- if environment DEV_SERVER_BROWSER exists use it, or 'google-chrome' (for windows, use 'chrome') <br />
const DEFAULT_BROWSER = process.env.DEV_SERVER_BROWSER || 'google-chrome'

- if environment PROD_SERVER_PORT exists use it, or 8010 <br />
const port = process.env.PROD_SERVER_PORT || 8010

# Start
- starts in development mode <br />
npm start

- starts in production mode <br />
npm run build



---
All rights reserved. Created by aulion.