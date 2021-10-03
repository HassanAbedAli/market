import { ExecutionContext, CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class Authenticated implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return request.isAuthenticated();
  }
}
