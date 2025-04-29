import { randomUUID } from "crypto"
import { Replace } from "../../helpers/Replace"

export interface BankSchema {
    name: string
    value: string
    dtCreated: Date
    dtUpdated?: Date
}

export class BackEntity {

    private _id: string
    private props: BankSchema

    constructor(
        props: Replace<BankSchema, { dtCreated?: Date, dtUpdated?: Date }>,
        id?: string
    ) {
        this._id = id ?? randomUUID()
        this.props = {
            ...props,
            name: props.name,
            value: props.value,
            dtCreated: props.dtCreated ?? new Date(),
            dtUpdated: props.dtUpdated ?? new Date()
        }
    }

    getId() {
        return this._id
    }

    getName(): string {
        return this.props.name
    }

    getValue(): string {
        return this.props.value
    }

    getDtCreated(): Date {
        return this.props.dtCreated
    }

    getDtUpdated(): Date | null | undefined {
        return this.props.dtUpdated
    }


    setName(name: string) { this.props.name = name}
    setValue(value: string) { this.props.value = value}
    setDtCreated(dtCreated: Date) { this.props.dtCreated = dtCreated}
}