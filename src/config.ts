interface ExtendedWindow extends Window {
  _env_?: Environment | any;
}

interface Environment {
  REACT_APP_API_URL: string;
}

// TODO: Move to a EnvironmentContext
export const getConfig = (name: string): string => {
  // WIndow dom
  const eWindow: ExtendedWindow = window;
  console.log("Utils.getConfig()", process.env);
  let env = process.env.NODE_ENV;
  // If we are running with node we return .env file variable
  if (env === "development") {
    let test = process.env[name];
    if (test) {
      return test;
    } else return "";
  } else if (env === "production") {
    // If we are not running with node we read from the injected
    // into the DOM with the environment.sh script
    // Return the variable from the dom.
    return eWindow._env_[name];
  }
  return "";
};
