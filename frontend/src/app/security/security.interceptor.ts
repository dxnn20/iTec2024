import { HttpInterceptorFn } from '@angular/common/http';

export const securityInterceptor: HttpInterceptorFn = (req, next) => {
  req=req.clone({withCredentials: true});
  return next(req);
};
