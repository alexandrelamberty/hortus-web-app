interface ExtendedWindow extends Window {
  _env_?: Environment | any;
}

interface Environment {
  REACT_APP_NODE_ENV: string;
  REACT_APP_API_URL: string;
}

export const getConfig = (name: string): string | undefined => {
  // WIndow dom
  const eWindow: ExtendedWindow = window;
  console.log("GET_CONFIG ---------------");
  console.log("process.env", process.env);
  let env = process.env.NODE_ENV;
  // If we are running with node we return .env file variable
  if (env === "development") {
    console.log("Config - dev");
    return process.env[name];
  } else if (env === "production") {
    // If we are not running with node we read from the injected
    // into the DOM with the environment.sh script
    console.log("Config - prod");
    // Return the variable from the dom.
    return eWindow._env_[name];
  }
};
