import sys
import requests
import pymongo

from bs4 import BeautifulSoup
from pymongo import MongoClient

# connect to MongoDB
uri = "mongodb+srv://danindu:gLe8lKyg5S0UNRP4@jetvialensedb.x7bdmb1.mongodb.net/?retryWrites=true&w=majority&appName=JetViaLenseDB"
client = MongoClient(uri)
db = client['film-data']
collection = db['locations']

# check connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# getting movie locations by passing id and title as arguments from node
movieID = sys.argv[1]
movieTitle = sys.argv[2]

duplicationCount = collection.count_documents({"imdbID": movieID})

if(duplicationCount == 0):

        url = "https://www.imdb.com/title/"+movieID+"/locations/?ref_=tt_dt_loc"

        headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')

            # Find the div with the specified class
            div_elements = soup.find_all('div', {'class': 'sc-43930a5b-2 lkBRTN'})

            locations = []  # List to store locations

            for div_element in div_elements:
                location = div_element.text.strip()  # Get the text content of the div and remove leading/trailing whitespace
                locations.append(location)  # Append location to the list

            # adding to the mongodb (document)
            if(len(locations) == 0):
                locations.append("No locations found for this movie: click here to submit a location.")
                result = collection.insert_one({
                        "imdbID": movieID,
                        "movieTitle": movieTitle,
                        "locations": locations
                    })
            else:
                result = collection.insert_one({
                        "imdbID": movieID,
                        "movieTitle": movieTitle,
                        "locations": locations
                    })           

            for data in locations:
                print(data)

        else:
            print(f"Failed to load the locations. Status code: {response.status_code}")
