class Utils {
  static log(message: string): void {
    const timestamp = (Date.now() / 1000).toFixed(2);
    console.log(`[${timestamp}] ${message}`);
  }

  static logError(message: string): void {
    const timestamp = (Date.now() / 1000).toFixed(2);
    console.error(`[${timestamp}] ${message}`);
  }

  static logWarn(message: string): void {
    const timestamp = (Date.now() / 1000).toFixed(2);
    console.warn(`[${timestamp}] ${message}`);
  }

  /**
   * Return a range of month numbers ie: 1 to 12
   * for an input in quarter of month ie: 1 to 48
   *
   * @param {Number}		start		A month quart
   * @param {Number}		end			A month quart
   *
   * @returns {Number} The month number
   */
  // TODO: refactor to pass only one value
  static monthQuarterToMonth(start: number, end: number): Array<number> {
    let ratio: number = 4;
    return [Math.ceil(start / ratio), Math.ceil(end / ratio)];
  }

  /**
   * Check if a value is equal or between two others values
   *
   * @param {Number}    value
   * @param {Number}		start
   * @param {Number}    end
   *
   * @returns {Boolean}
   */
  static isEqualOrBetween(value: number, start: number, end: number): Boolean {
    if (value >= start && value <= end) return true;
    return false;
  }
}

export { Utils };
