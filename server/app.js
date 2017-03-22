'use strict';
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static('../app'));
app.use(express.static('../vendors'));


app.get('/api/login', (req, res) => {
  res.json({'response': 'success'});
});
app.get('/api/logout', (req, res) => {
  res.json({'response': 'success'});
});


let todos = [
  {
    id: 0,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 1,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 2,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 3,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 4,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 5,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 6,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 7,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 8,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 9,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 10,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 11,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 12,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 13,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 14,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 15,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 16,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 17,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 18,
    title: "jakieś zadanie",
    description: "opis zadania"
  },
  {
    id: 19,
    title: "jakieś zadanie",
    description: "opis zadania"
  }
];

app.get('/api/list', (req, res) => {

  const start = parseInt(req.query.start);
  const end = parseInt(req.query.start)+parseInt(req.query.num);
  let list = [];
  for(let i=start; i<end; i++){
    if(typeof todos[i] !== 'undefined') {
      list.push(todos[i]);
    }
  }

  res.json(list);
});
app.post('/api/add', (req, res) => {

});
app.post('/api/edit/:todoId', (req, res) => {

  console.log(req.body);
  if(typeof req.body !== 'undefined'){
    if(req.body.title !== null && req.body.id === req.params.todoId){
      for(var todo in todos) {
        if(todos[todo].id == req.body.id){
          todos[todo].title = req.body.title;
          todos[todo].description = req.body.description;
          res.json(todos[todo]);
          break;
        }
      }
    }

  }
  for(var todo in todos) {
    if(todos[todo].id == req.params.todoId){
      res.json(todos[todo]);
    }
  }
});
app.post('/api/delete', (req, res) => {

});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/../index.html'));
})

app.listen(80, () => {
    console.log('Example app listening on port 80!')
})
