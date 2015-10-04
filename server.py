from flask import Flask , render_template
import os

app = Flash(__name__)

@app.route("/")
def test():
  return "hello world"

if __name__ == "__main__":
  app.run(debug=True)
