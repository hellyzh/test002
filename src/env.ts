import * as dotenv from "dotenv";
dotenv.config();

export class Env {
  public static get username() {
    return this.getVal("M365_USERNAME", process.env.M365_USERNAME);
  }

  private static getVal(name: string, value: string | undefined): string {
    if (!value) {
      throw new Error(`Environment variable ${name} should not be empty.`);
    }
    return value as string;
  }
}