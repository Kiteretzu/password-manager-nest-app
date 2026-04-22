import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    example: '0f2d92ec-8f80-4cf2-aee9-e9cf8ef11f65',
    description: 'User unique identifier',
  })
  id: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address',
  })
  email: string;

  @ApiProperty({
    example: '2026-04-22T10:30:00.000Z',
    description: 'User creation timestamp',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-04-22T10:30:00.000Z',
    description: 'User last update timestamp',
  })
  updatedAt: Date;
}
