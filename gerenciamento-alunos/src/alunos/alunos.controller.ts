import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() dados:{codigo_matricula:string;nome_completo:string;acompanhamento:string}) {
    return this.alunosService.create(dados.codigo_matricula,dados.nome_completo,dados.acompanhamento);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alunosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dados:Partial<Aluno>) {
    return this.alunosService.update(+id, dados);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
