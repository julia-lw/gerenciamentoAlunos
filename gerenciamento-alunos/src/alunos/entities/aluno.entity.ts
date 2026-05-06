export class Aluno {
codigo_matricula:string;
nome_completo:string;
situacao:string;
acompanhamento:string;

constructor(parciais:Partial<Aluno>){
    this.codigo_matricula = parciais.codigo_matricula;
    this.nome_completo = parciais.nome_completo;
    this.acompanhamento = parciais.acompanhamento;
    this.situacao = parciais.situacao || 'Cursando.';
    }
}