// 


const express = require('express')
const app = express()

const books = [
  {
    id: '1',
    name: 'Personal Finance',
    price: 500
  },
  {
    id: '2',
    name: 'JavaScript for Dummies',
    price: 1500
  },
  {
    id: '3',
    name: 'Java Definitive Edition',
    price: 2500
  },
  {
    id: '4',
    name: 'Personal Finance',
    price: 100
  },
  {
    id: '5',
    name: 'JavaScript for Dummies',
    price: 300
  },
  {
    id: '6',
    name: 'Java Definitive Edition',
    price: 200
  }
]

app.get('/books',(req,res)=>{
  
  if (req.query.show == 'all'){
    return res.json(books)
  }

  if(req.query.price == '500'){
    const result = books.filter((book)=>book.price<=500)
    res.json(result)
  }
  if(req.query.price=='1000'){
    const result = books.filter((book)=>book.price<=1000)
    res.json(result)
  }
  return res.json(books)
})

app.listen(8000,()=>{
  console.log("server is listening on port 8000")
})