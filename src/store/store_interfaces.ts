
export type ElementId = number;
export type ListOfDays = number[];
export type ListOfEmptyDays = number[] | undefined[];
export type Month = string;
export type WeekDays = string[];

interface IeventData {
    taskName: string,
    isCompleted: boolean,
    id: number
}
export interface IvalueData {
    taskName?: string,
    isCompleted: boolean,
    id: number,
}
export interface Idata {
    [key: number]: IeventData[]
};
export interface Ipayload {
    key: number,
    value: string,
}
export interface IpayloadExtended {
    key: number,
    value: IvalueData
}
export interface Istate {
    getElementId: ElementId;
    getListOfDays: ListOfDays;
    getListOfEmptyDays: ListOfEmptyDays;
    getMonth: Month;
    getWeekDays: WeekDays;
    getData: Idata;
    updateWithId: (id: number) => void;
    updateWithEvent: (payload: Ipayload) => void;
    updateWithTaskStatus: (payload: IpayloadExtended) => void;
}