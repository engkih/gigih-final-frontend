# TOKOPEDIA PLAY (FRONTEND)

This repo is frontend code for Tokopedia Play clone project in Generasi Gigih 3.0.

## FEATURES

### Home page
- User can see video list with thumbnail from YouTube in home page.
- User can click each video and go to video detail page.
- User can see the navbar on top of the home page

### Video Detail Page
- Once user clicked one of the video from the home page, user will be moved to the `video detail` page.
- The Video Detail page shows embeded youtube video.
- User can play the youtube video.
- User can see the Products list on the left.
- User can click those products, which lead user to the product's page.
- User can comment by inputting username and comment.
- User can see the comment in the comment list once user click the SUBMIT button


## HOW TO RUN IN LOCAL

1. Download the code for `frontend` or clone the repository

    ```bash
    git clone https://github.com/engkih/gigih-final-frontend.git
    ```
3. Install dependencies

    ```bash
    npm install
    ```
4. Chang
   ```bash
   const serverUrl = "http://localhost:3030/"
   ```
   in ```src/services/videoFetch.js``` files to your backend API address.


5. Run the app

    ```bash
    npm start
    ```

8. The app will run on

    ```
    http://localhost:3000
    ```
