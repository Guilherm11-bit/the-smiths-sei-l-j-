from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Lista para armazenar os comentários
comentarios = []

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', comentarios=comentarios)

@app.route('/comentar', methods=['POST'])
def comentar():
    nome = request.form['nome']
    comentario = request.form['comentario']
    comentarios.append({'nome': nome, 'comentario': comentario})
    return jsonify(comentarios)

if __name__ == '__main__':
    app.run(debug=True)

