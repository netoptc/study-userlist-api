import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.headers.user_id;
    try {
      const all = this.listAllUsersUseCase.execute({
        user_id: userId.toString(),
      });
      return response.json(all).send();
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ListAllUsersController };
