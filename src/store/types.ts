
// export type ELEMENT_ID = number;
// export type LIST_OF_DAYS = number[];
// export type LIST_OF_EMPTY_DAYS = number[];
// export type MONTH = string;
// export type WEEK_DAYS = string[];

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
// export interface IState {
//     idToHighlight: number;
//     data: IData;
//     // getListOfDays: LIST_OF_DAYS;
//     // getListOfEmptyDays: LIST_OF_EMPTY_DAYS;
//     // getMonth: MONTH;
//     // getWeekDays: WEEK_DAYS;
//     // getData: IData;
//     updateWithId: (id: number) => void;
//     updateWithEvent: (payload: IPayload) => void;
//     updateWithTaskStatus: (payload: IPayloadExtended) => void;
// }