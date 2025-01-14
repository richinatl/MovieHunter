The list display is no longer working, search functionality and most popular searches still are. Investigating as to why it's no longer working after a year of flawless operation now and will update the page when a solution is found. I suspect something has changed with the APIs.

Richard Murphy 7/18/23

---

**Update**

As suspected, on of the APIs has changed. They have entered into an agreement with AWS for their API. The movie db API still works so there's still search functionality and you're still able to get the most popualr recent 
releases but the IMDB lists are no longer functional. For any potential employers you'll have to see the screenshots to see the original intended functionality. Right now I am focused on learning C# and other 
technologies and my code has advanced quite a bit since this effort anyway

![MovieHunterAPI](https://github.com/richinatl/MovieHunter/assets/95508564/59e97612-dc90-433f-81be-a8631a539a24)

---



## User Story

* As an indecisive movie watcher, I want to see what the most popular movies are right now.
* As an indecisive movie watcher, I want to see what the most popular movies of all-time are.
* As a movie watcher ready to watch a specific movie, I want to know what streaming platform a particular movie is available on so that I can watch the movie.
* As a movie watcher, I want to know general details of a movie when I search for it. 

## User Interface Features

* The home page includes a search bar that the user can use to search for any movie that they would like to receive additional details about.
* The home page includes the five most recent searches that the user has made under the search bar, so that the user may click them to search for that movie again. 
* The home page includes three trending movies that the user could look and search for in the search bar if they desire.
* The home page has three lists: Top 250 Movies of All-Time (according to the Internet Movie Database 'IMDB'), Top 100 Popular Movies (according to the Internet Movie Database 'IMDB'), and the Highest Box Office Earnings (according to the Internet Movie Database 'IMDB').
    * The movies in each of these lists can be clicked to receive additional details on the movie that was clicked on.


*  The movie info page is the page that the user is taken to upon searching for a movie in the search bar, or by clicking a movie in the lists provided on the home page (Recent search, Top 250 All-Time, Top 100 Popular, or Top Box Office).
* The movie info page includes the following info on each movie that is inquired about:
    * A poster of the movie
    * The streaming platform that the movie can be found on
    * The date the movie was released
    * A summary of the movie
    * The cast of the movie
    * The genre of the movie
    * A review of the movie
    * Recommendations related to the searched movie

## Web APIs
* This web application utilized two public third party web APIs:
    * The Movie Database API: https://developers.themoviedb.org/
    * The IMDB API: https://imdb-api.com/

## CSS Frameworks
* Bootstrap: https://getbootstrap.com/docs/3.4/css/

## Languages
* HTML
* CSS
* JavaScript/jQuery

## Mock-Up

![](./images/Mock-Up-1.png)
![](./images/Mock-Up-2.png)
![](./images/Mock-Up-3.png)
![](./images/Mock-Up-4.png)
![](./images/Mock-Up-5.png)
![](./images/Mock-Up-6.png)
![](./images/Mock-Up-7.png)


## Links
* GitHub Repository: https://github.com/richinatl/MovieHunter
* Deployed Page: https://richinatl.github.io/MovieHunter/
