
# Todo Application 


## Features:

- Responsive and user-friendly Todo App.
- Add and Delete Todo.
- Update Todo items by double clicking on the item.


## Run Locally

1) Clone the project

```bash
git clone https://github.com/RitikKumar202/Todo-Application.git
```

2) Installation

```bash
cd Todo-front
   npm install
cd Todo-back
   npm install  
```

3) In the Todo-back folder create nodemon.json file and paste the below code with your own username and password.

```bash
{
  "env": {
    "MONGO_USER": "your-username",
    "MONGO_PASSWORD": "your-password"
  }
}
```
4) Start the server

```bash
cd Todo-front
   npm start
cd Todo-back
   npm start  
```


## Tech Stack

**Client :** React.js, Typescript, CSS, HTML   
**Server :** Node.js, Express.js, MongoDB

