/**
 * Inspired by `clsx` (https://github.com/lukeed/clsx/blob/925494cf31bcd97d3337aacd34e659e80cae7fe2/src/lite.js)
 */
export function clsx(...args: unknown[]) {
  return args.reduce((result: string, arg) => {
    if (typeof arg === "string") {
      result += " " + arg;
    }
    return result;
  }, "");
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
