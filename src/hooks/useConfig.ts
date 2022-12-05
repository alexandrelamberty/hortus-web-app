interface ExtendedWindow extends Window {
  _env_?: Environment | any;
}

interface Environment {
  REACT_APP_API_URL: string;
}

/**
 * Return the value of an environment variable if it exist. If not it will read
 * from an added property to the DOM that contains the environments variable
 * injected with the script Venvironment.sh
 * @see environment.sh
 * @param name The environment variable name
 * @returns The value of the environment variable
 */
export const useConfig = (name: string): string => {
  const ewindow: ExtendedWindow = window;
  let env = process.env.NODE_ENV;
  // If we are running with node we return .env file variable
  if (env === "development") {
    let variable = process.env[name];
    if (variable) return variable;
    else return "undefined";
  } else if (env === "production") {
    // If we are not running with node we read from the injected
    // into the DOM with the environment.sh script
    if (ewindow._env_[name]) return ewindow._env_[name];
    else return "undefined";
  }
  return "undefined";
};
