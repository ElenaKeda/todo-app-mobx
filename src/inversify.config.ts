import { Container } from "inversify";
import { TYPES } from "./types";
import { IService } from "./interfaces";
import { Service } from "./components/Service";

const myContainer = new Container();
myContainer.bind<IService>(TYPES.Service).to(Service);

const serviceContainer = myContainer.get<IService>(TYPES.Service);

export { myContainer, serviceContainer };