import { ResponseError } from "./response_error.js";

export const errorHandler = (statusCode?: number, message?: string) => {
  const error = new ResponseError(message, statusCode);
  return error;
};
