const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const apiKey = process.env.DOG_API_KEY;

app.use(cors());

//Route for all dog breeds
app.get('/dog-breeds', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
            headers: {
                'x-api-key': apiKey
            }
        });
        console.log("successfully fetched all dog breeds!")
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from the Dog API');
    }
});

//Route to retrieve images 
app.get('/dog-image/:imageId', async (req, res) => {
    const { imageId } = req.params;

    try {
        const response = await axios.get(`https://cdn2.thedogapi.com/images/${imageId}.jpg`, {
            responseType: 'arraybuffer', 
        });
        console.log(`successfully fetched image with ID: ${imageId}`)
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching image');
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});