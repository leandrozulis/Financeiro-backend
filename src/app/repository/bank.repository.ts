import { BankSchema } from "../entities/Bank.entity";

export interface RepositoryBank {
  create(bank: BankSchema): Promise<BankSchema>
}