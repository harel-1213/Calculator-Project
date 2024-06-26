from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('templates', filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

