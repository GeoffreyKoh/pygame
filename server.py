from flask import Flask , render_template
import os
from flask.ext.triangle import Triangle
from flask.ext.bower import Bower

app = Flask(__name__,static_path='/static')
Triangle(app)
Bower(app)

@app.route("/index")
def test():
  return  render_template("index.html")

if __name__ == "__main__":
  app.run(debug=True,port=5000,host="0.0.0.0")
