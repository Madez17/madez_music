# Spotify App

Application that allows you to search for songs through the Spotify public Web API https://developer.spotify.com/documentation/web-api/.

---

- Interface

![Imgur](https://i.imgur.com/qX2Js4z.jpg)

- Details song

![Imgur](https://i.imgur.com/C3WRChk.png)

## Backend:

- I built a backend application that would act as a proxy between the Spotify Web API and a FrontEnd application, which allows you to search from the FrontEnd application.

For the backend I built an endpoint called /search?q="word to search" that allows searching for songs by capturing the word that the user writes and sends.


## FrontEnd:

- For Fronend, I create a page with a form that consists of a text field to enter the search term that the user wants. After the user fills in the field and clicks submit, below the form it shows a paginated list with the results.

- Finally create a detail modal: Which shows the additional information about a song. The user accesses it through the details button.


## Pre requirements
- You must have the latest version of Node.js installed
- You must request the credentials to use the spotify api:
https://developer.spotify.com/dashboard/

- Once you have the Client-ID and the Client-secret, go to the * .env.example * file and generate a copy of it and rename the file to *.env*.

- It is worth clarifying that inside this *.env* file you must paste your client-id and client-secret that you just generated.

## To run this application:

1. Go to the following link : https://github.com/Madez17/madez_music and:
    - ```clone the project is your local. ```

1. Move to the madez_music folder and run the following command:
    ```- npm install```


---


URL: app deploy en heroku


## Author
* **María Fernanda Méndez** - [Madez17](https://github.com/Madez17)
