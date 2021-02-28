import { Injectable } from '@angular/core';

export class ConfigModel {
  id: string;
  login: string;
  email: string;
}

// ConfigUpdate === Partial<ConfigModel>
// export interface ConfigUpdate {
//   id?: string;
//   login?: string;
//   email?: string;
// }

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configModel: ConfigModel = new ConfigModel();

  constructor() { }

  setOrUpdateConfig(configUpdate: Partial<ConfigModel>): void {
    this.configModel = {
        ...this.configModel,
        ...configUpdate
    }
  }

  getConfig(): ConfigModel {
    return { ...this.configModel };
  }

  setId(id: string): void {
    this.configModel.id = id;
  }

  getId(): string {
    return this.configModel.id;
  }

  setLogin(login: string): void {
    this.configModel.login = login;
  }

  getLogin(): string {
    return this.configModel.login;
  }

  setEmail(email: string): void {
    this.configModel.email = email;
  }

  getEmail(): string {
    return this.configModel.email;
  }
}
