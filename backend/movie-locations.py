import sys
from bs4 import BeautifulSoup
import requests

movieID = sys.argv[1]

def predit():

    # movieID=input("enter the movie ID : ")
    # movieId = "tt1670345"

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
            print(location)
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")


    return {"location":response}

predit()
