# [Hopify](https://github.com/grrtvnlw/Elegant-Panda)

![Home Page](homepage.png)

## Description

Use Hopify to find beers and breweries in your city!

## List of the APIs Used:

1. OpenBreweryDB
2. BreweryDB
3. Google Maps

## Technologies Used

1. React
2. Redux
3. Node.js
4. Express.js
5. PostgreSQL
6. React-Google-Maps

## What Features You Would Add Next?

The next challenge for this project will be adding beer data to the database. My goal will be to automate this process, which will include writing code to scrape beer data from various brewery websites and then writing scripts to automate the importing of this data into my database. Once I am able to populate the database with valuable data about the beers that are available all over the country, the app will be that much more useful and appealing to users.

## Challenges

One of the biggest challenges with this porject was aggregating beer data for the beer database. Manually adding data about beer from various brewery websites is very time consuming, which is why I will be seeking ways to automate this process.

Another challenge was integrating the Google Maps componenent into my app, which I did via the React-Google-Maps npm module. I was able to create custom markers and use the fitBounds() method to adjust the center of the Google map based on the results of the user's search input.

## Next Steps

The primary next step for this project is to add more data to the beer database. My goal is to automate this work as much as possible, which will include writing a web scraper (currently in progress, written in Python and Beautiful Soup), build a Chrome extension which can send data to the web scraper regarding the structure and labeling of HTML elements for a specific URL, and finally writing batch scripts to automate the importing of this data from the JSON files into my database. The more robust the beer database is, the more useful the app will be. 
