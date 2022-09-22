interface IProcessos {
    uuid?: String
    confeccao_id: Number,
    nm_processo: String,
    nm_classe_processual: String,
    nm_justica: String,
    nm_vara: String,
    nm_exequente: String,
    nm_executado: String,
    nm_outros_partes: String,
    nu_edital: Number,
    nm_avaliacao: String,
    dt_avaliacao: Date,
    nm_valor_divida: String,
    dt_divida: Date,
    nm_porcentagem_comissao: String,
    nu_cda: Number,
    nu_ordem: Number,
    nu_codigo: Number,
    nm_depositario: String,
    nm_localizacao_bem: String,
    nm_onus: String,
    nm_descricao_bem: String
}

export default IProcessos;