import { env } from '../config/env.js';

let User;

if (env.DB_TYPE === 'mongo') {
  const mod = await import('./User.mongo.js');
  User = mod.default;
} else {
  const mod = await import('./User.js');
  User = mod.default;
}

export { User };
export default { User };
