import axios from "axios";
import { plainToClass } from "class-transformer";
import { stringify } from "querystring";
import { AuthenticationDTO } from "./obj/authenticationDTO";

export class Authentication {
  static async getToken(service: any): Promise<AuthenticationDTO> {
    const auth = Buffer.from(
      service.clientid + ":" + service.clientsecret
    ).toString("base64");
    let response = null;
    const data = stringify({
      grant_type: "client_credentials",
    });

    try {
      response = await axios({
        method: "post",
        url: `${service.url}/oauth/token`,
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      });
    } catch (error) {
      console.error("Error in getting token from xsuaa" + error);
    }

    return plainToClass(AuthenticationDTO, response?.data);
  }
}
