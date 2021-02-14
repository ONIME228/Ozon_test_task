import { Mutation, State, Getter } from 'vuex-simple';
import { createVuexStore } from 'vuex-simple';

import Vue from 'vue';
import Vuex from 'vuex';

import { getWeekNumber, getListOfDays, getMonthYear, getTodaysDate } from '../utils/getWeekDay';

// interface State {
//     elementId: number;
// }
const listOfDays = getListOfDays();
const listOfEmptyDays = getWeekNumber();
const month = getMonthYear();
const todaysDate = getTodaysDate();
class MyStore {
    @State()
    public elementId: any = todaysDate;
    public listOfDays: any = listOfDays;
    public listOfEmptyDays: any = listOfEmptyDays;
    public month: string = month;
    public weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];
    public data: any = {
        14: [
            {
                taskName: 'Выполнить тестовое',
                isCompleted: true,
            },
        ],
    }

    @Getter()
    public get getElementId(): any {
        return this.elementId;
    }
    @Getter()
    public get getListOfDays(): any {
        return this.listOfDays;
    }
    @Getter()
    public get getListOfEmptyDays(): any {
        return this.listOfEmptyDays;
    }
    @Getter()
    public get getMonth(): any {
        return this.month;
    }
    @Getter()
    public get getWeekDays(): string[] {
        return this.weekDays;
    }
    @Getter()
    public get getData(): any {
        return this.data;
    }

    @Mutation()
    public updateWithId(id: number) {
        this.elementId = id;
    }
    @Mutation()
    public updateWithEvent(payload: any) {
        const { key, value } = payload;
        if (this.data[key]) {
            // this.data = {
            //     ...this.data,
            //     [key]: [...this.data[key], value]
            // };
            // this.data[key] = [value, ...this.data[key]]
            this.data[key] = [
                ...this.data[key],
                {
                    taskName: value.taskName,
                    isCompleted: false,
                },
            ]
        } else {
            // this.data = {
            //     ...this.data,
            //     [key]: [value]
            // };
            // this.data[key] = [value]
            this.data[key] = [{
                taskName: value.taskName,
                isCompleted: false,
            },]
        };
        this.data = { ...this.data }
        // console.log('blank', this.data);
    }
    @Mutation()
    public updateWithTaskStatus(payload: any) {
        const { key, value } = payload;
        if (this.data[key]) {

            this.data[key].forEach((element: any) => {
                if (element.taskName === value.taskName) {
                    // console.log('element', element);
                    element.isCompleted = value.isCompleted;
                }
            });
        }
        this.data = { ...this.data }
    }
}

Vue.use(Vuex);
const instance = new MyStore();

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
});