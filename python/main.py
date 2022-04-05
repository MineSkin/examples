#NO MODULES REQUIRED: EVERYTHING IN THE STANDARD PYTHON LIBRARY

import requests as re

key = "<ApiKey>"
useragent = "<UserAgentNameHere>"
filename = "skin.png"

with open(filename, 'rb') as file:
    response = re.post(
        url='https://api.mineskin.org/generate/upload',
        data={"name":"SomeNameHere","visibility":0},
        files={"file":(filename, file, 'text/x-spam')},
        headers={"User-Agent": useragent,"Authorization": "Bearer " + key}
    )

    print(response.json()['data']['texture']['value'])
    print(response.json()['data']['texture']['signature'])
