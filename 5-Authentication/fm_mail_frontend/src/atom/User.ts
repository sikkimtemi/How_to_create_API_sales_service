import { atom } from 'jotai';

type Payload = { email: string };
type IdToken = {
  jwtToken: string;
  payload: Payload;
};
type SignInUserSession = { idToken: IdToken };
export type CognitoUser = {
  signInUserSession: SignInUserSession;
  username: string;
  userDataKey: string;
};

const stateCurrentUser = atom<CognitoUser | null>(null);

export default stateCurrentUser;
