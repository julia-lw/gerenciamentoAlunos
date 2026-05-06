import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAlunoDto {
    @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  codigo_matricula: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  nome_completo: string;

  @IsOptional()
  @IsString()
  situacao?: string;

  @IsString()
  @IsOptional()
  acompanhamento: string;
}
