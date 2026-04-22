import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmMxMjMiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.signature',
    description: 'JWT access token for authenticated requests',
  })
  accessToken: string;
}
