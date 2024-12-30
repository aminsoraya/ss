import { headers } from "next/headers";
import { Service } from "./header";
import { Category, Menu } from "./subHeader";

export interface Meta {
  headers: {
    Services: Service[];
  };
  subHeaders: {
    Menus: Menu[];
    Categories: Category[];
  }|undefined;
}
