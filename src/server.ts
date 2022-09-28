
const express = require('express')
const cors = require('cors')

const app = express()
const corsOptions = { origin: 'http://localhost:5174', credential: true }

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))



const fakeTodos = [
	{
		id: '123',
		text: 'go to groceries store',
		isCompleted: false,
	},
	{
		id: '234',
		text: 'learn full stack development',
		isCompleted: true
	}
]

app.get('/test', (req, res) => {
	res.send('Hello from backend')
})


app.get('/todos', (req, res) => {
	res.status(200).json({
		message: {
			todo: fakeTodos
		}
	})
})

app.listen(8080, () => {
	console.log('Server listening: 8080')
})

