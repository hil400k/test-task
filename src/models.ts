export type IUser = {[key: string]: any};

export interface IGlobalState {
  user?: IUser,
  text?: string
}

export interface IAppState {
  global: IGlobalState
}

export interface IAction {
  type: string;
  payload: any;
}
