import { Address } from "./address.dto";

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    address: Address;
}
