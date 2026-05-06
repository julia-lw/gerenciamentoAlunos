import { Injectable } from '@nestjs/common';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [];

  create(createAlunoDto: any) {
    const novoAluno = new Aluno(createAlunoDto);
    this.alunos.push(novoAluno);
    return novoAluno;
  }

  findAll() {
    return this.alunos;
  }

  update(id: string, updateAlunoDto: any) {
    const index = this.alunos.findIndex(a => a.codigo_matricula === id);
    if (index >= 0) {
      this.alunos[index] = { ...this.alunos[index], ...updateAlunoDto };
      return this.alunos[index];
    }
    return { message: "Aluno não encontrado" };
  }

  remove(id: string) {
    const index = this.alunos.findIndex(a => a.codigo_matricula === id);
    if (index >= 0) {
      this.alunos.splice(index, 1);
      return { message: `Aluno ${id} removido com sucesso` };
    }
    return { message: "Aluno não encontrado" };
  }
}