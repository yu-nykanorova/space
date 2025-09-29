import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const SOLARSYSTEM_API_KEY = process.env.SOLARSYSTEM_API_KEY;
const SOLARSYSTEM_BASE_URL = "https://api.le-systeme-solaire.net/rest/bodies/";

app.use(cors());

app.get("/api/planets/:name", async (req, res) => {
    const { name } = req.params;
    
    try {
        const response = await fetch(`${SOLARSYSTEM_BASE_URL}${name}`, {
            headers: {
                "Authorization": `Bearer ${SOLARSYSTEM_API_KEY}`
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Error fetching data from Solar System API" });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
