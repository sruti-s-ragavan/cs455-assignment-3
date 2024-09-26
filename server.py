from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/getDateTime')
def get_date_time():
    current_date_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return current_date_time

if __name__ == '__main__':
    app.run()
