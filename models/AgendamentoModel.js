class AgendamentoModel {
  constructor(id, descricao, data, horario, tatuadorId, clienteId, preco) {
    this.id = id;
    this.descricao = descricao;
    this.data = data;
    this.horario = horario;
    this.tatuadorId = tatuadorId;
    this.clienteId = clienteId;
    this.preco = preco;
  }
}

export default AgendamentoModel;
