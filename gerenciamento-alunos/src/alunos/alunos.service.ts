import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  private alunos:Aluno[]=[];

  create(codigo_matricula:string,nome_completo:string,acompanhamento:string) {
    const novoAluno = new Aluno();
    novoAluno.codigo_matricula=codigo_matricula;
    novoAluno.nome_completo=nome_completo;
    novoAluno.acompanhamento=acompanhamento;
    this.alunos.push(novoAluno)
    return novoAluno;
  }

  findAll() {
    return this.alunos;
  }

  findOne(id: number) {
    return `This action returns a #${id} aluno`;
  }

  update(id: number, dados:Partial<Aluno>) {
    const index = this.alunos.findIndex(alunos => alunos.id===id);
    if(index >=0){
      this.alunos[index]={...this.alunos[index],...dados};
    return `O aluno #${id} foi atualizado com sucesso.`;
  }
  return `O aluno #${id} não foi atualizado.`;
}

  remove(id: number) {
    const index = this.alunos.findIndex(aluno => aluno.id===id);
    if(index >=0){
      this.alunos.splice(index,1);
    return `O aluno #${id} foi removido com sucesso.`;
    }
    return `O aluno #${id} não foi encontrado.`;
  }
}
