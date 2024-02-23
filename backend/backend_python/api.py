from flask import Flask

app= Flask(__name__)

@app.route('/api',methods=['GET'])

def api():
    return {
        'userid':1,
        'title':'Flask React Application',
        'completed':False
    }