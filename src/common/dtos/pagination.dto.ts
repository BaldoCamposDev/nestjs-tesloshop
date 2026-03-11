import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // transforma el string a number
  limit?: number;

  @IsOptional()
  @IsPositive()
  @Min(0)
  @Type(() => Number) // transforma el string a number
  offset?: number;
}
