# Boiler Plate for MERN Stack Application

## How to Setup ?
* **`npm install`**
* **`npm run client-install`** or **`cd client && npm install`**
* Make a file **keys.js** in the directory **~/config/keys.js**
```json
module.exports = {
    "mongoURI" : "<your mongoDB url>" ,
    "bcrypt" : "<key>" ,
    "jwt" : "<key>"
}
```
## How to Run ?
* Run in Server Mode : **`npm run server`**
* Run in Client Mode : **`npm run client`**
* Run in Developer Mode : **`npm run dev`**
