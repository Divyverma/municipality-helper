const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db");

// middleware
app.use(cors())
app.use(express.json())



// ROUTES>>>>

// register
app.post("/register", async (req, res) => {
    const { name, email, pass, post } = req.body;

    // checking if user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    if (userExists.rows.length > 0) {
        return res.status(400).json({ message: "User already exists" })
    }

    await pool.query(
        "INSERT INTO users (name, email, pass, post) VALUES ($1, $2, $3, $4)",
        [name, email, pass, post]
    )
    res.status(201).json({ message: "User registered Successfully" })

})


// login
app.post("/login", async (req, res) => {
    const { email, pass } = req.body;

    //check if user is registered or not
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    if (user.rows.length === 0) {
        return res.status(400).json({ message: "User not found" })
    }

    // verifying password
    if (pass !== user.rows[0].pass) {
        return res.status(400).json({ message: "Invalid email or Password" })
    }

    res.status(200).json({ message: "Login successfully" })
})



// report problem
app.post('/reportproblem', async (req, res) => {
    const { fname, lname, img, title, location, description } = req.body

    if (!fname || !lname || !title || !location || !description) {
        return res.status(400).json({ message: "All fields are neccessory" })
    }

    try {
        const result = await pool.query(
            "INSERT INTO problems (fname, lname, img, title, location, description) VALUES ($1, $2, $3, $4, $5, $6)",
            [fname, lname, img, title, location, description]
        )
        res.status(201).json({
            message: "Problem Submited successfully",
            problem: result.rows[0],
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// getting all problems
app.get("/problems", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM problems")
        res.status(200).json({ result: result.rows })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// getting a single issue
app.get("/problem/:id", async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query("SELECT * FROM problems WHERE id = $1", [id])
        res.status(200).json({ result: result.rows[0] })
    } catch (err) {
        res.status(500).json(err.message)
    }
})


// updated issue status
app.put('/updateissue/:id', async (req, res) => {
    const { id } = req.params
})



app.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})