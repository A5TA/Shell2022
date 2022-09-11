from flask import Flask
# importing the requests library
import requests

app = Flask(__name__)


@app.route('/')
def hello():
    # api-endpoint
    URL = "https://maps.googleapis.com/maps/api/geocode/json"
    
    # location given here
    location = "Florida International University"

    API_KEY = "AIzaSyAOPgyMTp0MfBGkKUrM--5N0j8ZBzkMriE"
    
    # defining a params dict for the parameters to be sent to the API
    PARAMS = {'address':location, 'key' : API_KEY}
    
    # sending get request and saving the response as response object
    r = requests.get(url = URL, params = PARAMS)
    
    # extracting data in json format
    data = r.json()

    # extracting latitude, longitude and formatted address 
    # of the first matching location
    print(data)

    latitude = data['results'][0]['geometry']['location']['lat']
    longitude = data['results'][0]['geometry']['location']['lng']
    formatted_address = data['results'][0]['formatted_address']
    
    # printing the output
    print("Latitude:%s\nLongitude:%s\nFormatted Address:%s"
      %(latitude, longitude,formatted_address))


    return '<h1>FIU is located at: {}!</h1>'.format(formatted_address)


  
