import { AuthTokens } from "./authTokens";
import { DestinationConfiguration } from "./destinationConfiguration";

export class DestinationDTO {
  public destinationConfiguration: DestinationConfiguration;
  public authTokens: AuthTokens[];

  constructor() {
    this.destinationConfiguration = new DestinationConfiguration();
    this.authTokens = new Array<AuthTokens>();
  }
}
