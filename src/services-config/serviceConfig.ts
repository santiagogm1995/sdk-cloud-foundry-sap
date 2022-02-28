import { getServices, loadEnv, readCFServices } from "@sap/xsenv";
loadEnv();
const services = readCFServices();

export class ServiceConfig {
  public static readConfig(serviceName: string): any {
    const serviceConfig = getServices(
      { destination: { tag: serviceName } },
      services
    );
    return serviceConfig;
  }
}
