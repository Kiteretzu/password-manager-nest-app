import { createParamDecorator, ExecutionContext, Logger } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from '../types/jwt-payload.type';

type AuthenticatedRequest = Request & {
  user?: JwtPayload;
};
const logger = new Logger('CurrentUserDecorator');

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): JwtPayload | undefined => {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    logger.log(`request.user: ${JSON.stringify(request.user)}`);
    return request.user;
  },
);
