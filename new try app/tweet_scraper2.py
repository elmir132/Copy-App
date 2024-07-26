import requests
from bs4 import BeautifulSoup
import json

def fetch_tweet_json(tweet_id):
    tweet_url = f'https://twitter.com/i/status/{tweet_id}'
    response = requests.get(tweet_url)
    if response.status_code == 200:
        json_data = response.json()
        if 'tweet' in json_data:
            tweet_json = json_data['tweet']
            return tweet_json

    return None

def extract_tweet_attributes(tweet_json):
    tweet_data = tweet_json
    tweet_attributes = {}

    # Extract the attributes you want here
    tweet_attributes['id'] = tweet_data['id_str']
    tweet_attributes['text'] = tweet_data['full_text']
    tweet_attributes['username'] = tweet_data['user']['screen_name']
    tweet_attributes['created_at'] = tweet_data['created_at']

    return tweet_attributes

if __name__ == '__main__':
    tweet_id = '1693538339385741384'  # Replace with the tweet ID
    tweet_json = fetch_tweet_json(tweet_id)
    
    if tweet_json:
        tweet_attributes = extract_tweet_attributes(tweet_json)
        if tweet_attributes:
            for func, attribute in tweet_attributes.items():
                print(f"{func}: {attribute}")
        else:
            print("Failed to extract tweet attributes.")
    else:
        print("Failed to fetch tweet JSON.")
