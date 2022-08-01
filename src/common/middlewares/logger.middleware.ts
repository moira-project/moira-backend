import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger("HTTP");
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`${req.ip} ${req.method} ${req.originalUrl}`);
    res.on("finish", () => {
      this.logger.log(res.statusCode);
    });
    next();
  }
}
