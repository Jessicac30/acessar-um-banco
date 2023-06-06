const mongoose = require('./conexao.js');

const LivroSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
}, { versionKey: false });

module.exports = mongoose.model('Livro', LivroSchema);

