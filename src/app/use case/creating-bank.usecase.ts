import { BankSchema } from "../entities/Bank.entity"
import { RepositoryBank } from "../repository/bank.repository"

interface CreatingBankRequest {
  name: string
  value: string
}

interface CreatingBankResponse {
  bank: BankSchema
}

export class UseCaseCreatingBank {
  constructor(
    private repositoryBank: RepositoryBank
  ) { }

  async execute({ name, value }: CreatingBankRequest): Promise<CreatingBankResponse> {

    const bank = await this.repositoryBank.create({
      name,
      value,
      dtCreated: new Date()
    })

    return {
      bank
    }
  }
}