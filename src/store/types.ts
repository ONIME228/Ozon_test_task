
interface IEventData {
    taskName: string,
    isCompleted: boolean,
    id: number
}
export interface IValueData {
    taskName?: string,
    isCompleted: boolean,
    id: number,
}
export interface IData {
    [key: number]: IEventData[]
};
export interface IPayload {
    key: number,
    value: string,
}
export interface IPayloadExtended {
    key: number,
    value: IValueData
}