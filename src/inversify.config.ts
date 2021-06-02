import { Container } from "inversify";
import { TYPES } from "./types";
import { IService, IStorageService } from "./interfaces";
import { Service } from "./components/Service";
import { StorageService } from "./components/StorageService";

const myContainer = new Container();
myContainer.bind<IService>(TYPES.Service).to(Service);
myContainer.bind<IStorageService>(TYPES.StorageService).to(StorageService);

const serviceContainer = myContainer.get<IService>(TYPES.Service);

export { myContainer, serviceContainer };