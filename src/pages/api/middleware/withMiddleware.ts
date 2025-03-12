import { NextApiRequest, NextApiResponse } from 'next';

type MiddlewareFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => Promise<void>
) => Promise<void>;

type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export default function withMiddleware(middleware: MiddlewareFunction, handler: ApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await middleware(req, res, () => handler(req, res));
  };
}