## \<Your Hackathon Here\>.js
### A generic Hackathon infrastructure ready to deploy. 

---

### Goals
1. Make a single configurable tool to act as hackathon infrastructure to stop repetitive coding of the same app by every hackathon in existance. 
1. Be simple to use and configure so that everyone can have ther _own_ app. 
1. Easy to run, low deployment cost. 

## How-To...
### Deploy
1. Create a MongoDB [Atlas](https://cloud.mongodb.com/user#/atlas/login) account.
1. Create a free-tier tier cluster. 
1. Create a stitch application and link it to your new cluster.
1. Fork this github repo. 
    1. Clone locally.
    1. `npm install`
1. Edit the variables and files in the config folder. 
1. __Commit your changes__
1. `npm run deploy`
1. In your fork on github, under settings, turn on github pages.
1. Point your DNS at this page with a CNAME entry.
    - [Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200169046-How-do-I-add-a-CNAME-record-)

_After the first deploy you can just edit config and re-run the deploy script_

### Deploy Locally
1. `npm install`
1. `npm run dev`
1. Open [localhost:8080](http://localhost:8080)

### Configure
Overwrite the content in the config directory and it will be applied to your app.
Static content can be written in either [Markdown](https://www.markdownguide.org/cheat-sheet) or [HTML](https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf).

Runtime variables can be set per environment via the appropriate `<env>.json` file in `./config/`.
See the schema in `./config/config_schema.json` for how each variable should be set.

### Stack
This [Aurelia](https://aurelia.io/) application runs on MongoDB [Atlas](http://atlas.mongodb.com) with [Stitch](http://stitch.mongodb.com).
