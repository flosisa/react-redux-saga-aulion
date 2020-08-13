<h2><b>React pattern/sample/template with Redux</b></h2>

---

# Installation
mkdir project <br />
cd project/ <br />
git clone http://github.com/main-url/some-url.git

cd some-url/ <br />
npm install

# Before starting the engine!
<em>/webpack/dev.js</em>
- if environment DEV_WEB_SERVER_HOST exists use it, or 127.0.0.1 <br />
const HOST = process.env.DEV_WEB_SERVER_HOST || '127.0.0.1'

- if environment DEV_WEB_SERVER_PORT exists use it, or 7111 <br />
const PORT = process.env.DEV_WEB_SERVER_PORT || 7111

- if environment DEFAULT_BROWSER exists use it, or 'google-chrome' (for windows, use 'chrome') <br />
const DEFAULT_BROWSER = process.env.DEFAULT_BROWSER || 'google-chrome'

<em>/express/server.js</em>
- if environment PROD_WEB_SERVER_PORT exists use it, or 8111 <br />
const port = process.env.PROD_WEB_SERVER_PORT || 8111

# Start a project
- start in development mode <br />
npm start

- start in production mode <br />
npm run build

---
Authorship:
- Created by: Laziz Toshmukhamedov
