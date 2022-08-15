declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // just remmeber, only NEXT_PUBLIC_* keys will be exposed to clients
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      NFT_STORAGE_API_KEY: 'string';
      ALCHEMY_API_KEY: 'string';
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
