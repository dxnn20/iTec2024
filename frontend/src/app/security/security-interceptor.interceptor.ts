import { HttpInterceptorFn } from '@angular/common/http';

export const securityInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
