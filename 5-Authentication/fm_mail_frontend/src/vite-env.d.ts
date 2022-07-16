/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OAUTH_DOMAIN: string;
  readonly VITE_OAUTH_REDIRECT_SIGN_IN: string;
  readonly VITE_OAUTH_REDIRECT_SIGN_OUT: string;
  readonly VITE_REGION: string;
  readonly VITE_USER_POOL_ID: string;
  readonly VITE_USER_POOL_WEB_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
