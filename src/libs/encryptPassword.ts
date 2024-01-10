import { hashSync } from 'bcrypt';
import { SALT } from '../environment';

export function encryptPassword(password: string) {
  const passwordHash = hashSync(password, SALT);

  return passwordHash;
}
