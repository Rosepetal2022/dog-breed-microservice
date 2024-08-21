# Dog Encyclopedia 

## Menu

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Example Call](#example-call)
- [Example Response Body](#example-response-body)
- [Usage](#usage)

## Features

This microservice allows you to make an api call to it and recieve a list of all dog breeds and their info. This project needs to be cloned and installed and running in a local environment to work.

## Tech Stack

- Node.js 
- express
- Javascript


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rosepetal2022/dog-breed-microservice.git
   cd dog-breed-microservice
   ```
2. npm install
    ``` npm install ```
4. Start the aplication from the root folder.
    ```node server.js```

## Example Call 
This is an example call for the front end of your application.
```bash
    const fetchBreeds = async () => {
            try {
                const response = await fetch('http://localhost:4000/dog-breeds');
                if (!response.ok) {
                    throw new Error('Failed to fetch dog breeds');
                }
                const data = await response.json();
                setBreeds(data);
                console.log(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
```
## Example Response Body
This is an example of one of the many dog breeds you will recieve as a response.
```bash
	{
		"weight": {
			"imperial": "6 - 13",
			"metric": "3 - 6"
		},
		"height": {
			"imperial": "9 - 11.5",
			"metric": "23 - 29"
		},
		"id": 1,
		"name": "Affenpinscher",
		"bred_for": "Small rodent hunting, lapdog",
		"breed_group": "Toy",
		"life_span": "10 - 12 years",
		"temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
		"origin": "Germany, France",
		"reference_image_id": "BJa4kxc4X"
	},
```
## Usage 

This project was intended to be used as a microservice to my main application, my pet portal. However, anyone can use this project but will need a sperate api key of their own. 

## Contact
For questions for support, please contact: 
+ **Email** marcotter25@yahoo.com
+ **GitHub** [Rosepetal2022](https://github.com/Rosepetal2022)