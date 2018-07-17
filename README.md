## \<Your Hackathon Here\>.js
### A generic Hackathon infrastructure ready to deploy. 

---

### Goals
1. Make a single configurable tool to act as hackathon infrastructure to stop repetitive coding of the same app by every hackathon in existance. 
1. Be simple to use and configure so that everyone can have ther _own_ app. 
1. Easy to run, low deployment cost. 

## How-To...
### Deply
1. Create a MongoDB [Atlas](https://cloud.mongodb.com/user#/atlas/login) account.
1. Create a free-tier tier cluster. 
1. Create a stitch application and link it to your new cluster.
1. Fork this github repo. 
    1. Overwrite the variables in the config folder. 
1. `npm run configure`
1. `npm run deploy`
1. In your fork on github, under settings, turn on github pages.
1. Point your DNS at this page with a CNAME entry.
    - [Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200169046-How-do-I-add-a-CNAME-record-)

### Configure
... On the way

### Stack
This [Aurelia](https://aurelia.io/) application runs on MongoDB [Atlas](http://atlas.mongodb.com) with [Stitch](http://stitch.mongodb.com).
