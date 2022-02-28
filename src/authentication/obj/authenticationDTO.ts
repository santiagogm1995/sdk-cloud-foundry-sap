import { Expose } from "class-transformer";

export class AuthenticationDTO {
  @Expose({ name: "access_token" })
  public accessToken: string;
  @Expose({ name: "token_type" })
  public tokenType: string;
  @Expose({ name: "expires_in" })
  public expiresIn: number;
  @Expose({ name: "scope" })
  public scope: string;
  @Expose({ name: "jti" })
  public jti: string;

  constructor() {
    this.accessToken = "";
    this.tokenType = "";
    this.expiresIn = 0;
    this.scope = "";
    this.jti = "";
  }
}
