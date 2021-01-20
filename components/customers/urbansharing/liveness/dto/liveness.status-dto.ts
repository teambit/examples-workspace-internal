import { ApiProperty } from '@nestjs/swagger';

/**
 * Status Data Transfer Object
 */
export class StatusDto {
  @ApiProperty({ description: 'Git version string' })
  version: string;

  @ApiProperty({ description: 'Git branch string' })
  branch: string;
}
