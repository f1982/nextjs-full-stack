import { MiddlewareFactory } from "@/middlewares/stack-middleware";
import { NextFetchEvent, NextRequest } from "next/server";

export const withErrorHandler: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    try {
      await next(request, _next);
    } catch (error) {
      if (error instanceof Error) {
        console.log("withErrorHandler", error.message);
      }
    }
  };
};