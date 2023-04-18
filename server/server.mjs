import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

// Middlewares
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(morgan('dev'))

//Routes

const db = []

app.post('/todo', (req, res) => {
    
    const newTodo = {
        id: Numner(Date.now()),
        text: req.body.text
    }
    db.push(newTodo)
    
    res.json(newTodo)
})

app.get('/todo', (req, res) => {
    res.json(db)
})

app.get('/todo/:id', (req, res) => {
    const todo = db.find(t => t.id === Number(req.params.id));
  
    if (todo) {
      res.json({ data: todo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  });

app.listen(8000, () => {
    console.log('EXPRESS SERVER RUNNING')
})