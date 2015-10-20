from flask import Flask , render_template
import os
from flask.ext.triangle import Triangle

app = Flask(__name__,static_path='/static')
Triangle(app)

@app.route("/index")
def test():
  return  render_template("index.html")

if __name__ == "__main__":
  app.run(debug=True)
