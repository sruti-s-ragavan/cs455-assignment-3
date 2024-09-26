The purpose of this assingment is to show server-client communication. 
It deliberately makes some choices that are bad for your assignment(s). 
So, please do not rely on this, and only use this to get an understanding of what to do. 

Dependencies: 
Python 3 (I have 3.12).
Flask web dev framework (I have 3.0.3: https://flask.palletsprojects.com/en/3.0.x/; you could simply pip install it).

Tech stack: 
1. There is a simple HTML file, which shows the browser timestamp and the server timestamp.
2. To fetch the server timestamp, there is a server call that the JS file makes to the server.
3. The server side is implemented in Python using the Flask web development framework. 
    Flask starts a server, listens to HTTP calls, and serves HTML and JS files that are present in specific folders.
   It also does some funky things, like compiling views from templates (notice the folder name convention here, and see the funny parts inside the HTML file).
   Note: flask is good for dev, but not good for your future homeworks; use a better server!


