import fetch from "node-fetch";

const SOLARSYSTEM_BASE_URL = "https://api.le-systeme-solaire.net/rest/bodies/";

export default async function handler(req, res) {
  const { name } = req.query;

  try {
    const response = await fetch(`${SOLARSYSTEM_BASE_URL}${name}`, {
      headers: {
        "Authorization": `Bearer ${process.env.SOLARSYSTEM_API_KEY}`
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Error fetching data from Solar System API" });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}