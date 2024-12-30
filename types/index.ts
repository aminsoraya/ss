import { headers } from "next/headers";
import { Header, Service } from "./header";
import { Category, Menu, SubHeader } from "./subHeader";

export interface Meta {
  headers: Header;
  subHeaders: SubHeader;
}
