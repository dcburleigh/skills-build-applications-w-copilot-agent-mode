import { Router } from 'express';

const apiRouter = Router();

const resourceNames = [
  'users',
  'teams',
  'activities',
  'leaderboard',
  'workouts',
] as const;

for (const resourceName of resourceNames) {
  apiRouter.get(`/${resourceName}`, (_request, response) => {
    response.json([]);
  });
}

export default apiRouter;