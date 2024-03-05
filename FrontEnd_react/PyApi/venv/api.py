from flask import flask
from bs4 import BeautifulSoup
import requests

app= flask(__name__)

@app.route('/api/ml')

def predit():

    # movieID=input("enter the movie ID : ")
    movieID="tt2911666"

    url = "https://www.imdb.com/title/"+movieID+"/locations/?ref_=tt_dt_loc"

    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
    # Find the div with the specified class
        div_element = soup.find('div', {'class': 'sc-43930a5b-2 lkBRTN'})

        if div_element:
            final = div_element.text  # Get the text content of the div
            print(final)
        else:
            print("Div element not found.")
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")


    return {"location":final}
