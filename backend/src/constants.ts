export enum Role {
  GUEST = 0,
  USER,
  ADMIN,
}

export enum ServiceName {
  AUTH = `auth`,
}

export enum JobStatus {
  PENDING,
  FINISHED,
  ERRORED,
}

export const SEP1 = `:`
export const SEP2 = `_`

export const LOCK_TTL = 10

export const SESSION_TTL = 60 * 60 * 24 * 1.5

export const ClientToken = Symbol(`microservice`)

const JobPattern = { service: `job` }
export const JobRunPattern = { ...JobPattern, cmd: `run` }

const UserServicePattern = { service: `user` }
export const UserRegisterPattern = {
  ...UserServicePattern,
  cmd: `registerUser`,
}
export const UserListPattern = { ...UserServicePattern, cmd: `list` }

const AuthenticatePattern = { service: `authenticate` }
export const AuthenticateLoginPattern = { ...AuthenticatePattern, cmd: `login` }
export const AuthenticateUpdatePassPattern = {
  ...AuthenticatePattern,
  cmd: `updatePass`,
}
export const AuthenticateDeserializeSessionPattern = {
  ...AuthenticatePattern,
  cmd: `deserializeSession`,
}
