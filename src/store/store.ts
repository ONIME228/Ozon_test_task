import Vue from 'vue';
import Vuex from 'vuex';
import { Mutation, State, Getter } from 'vuex-simple';
import { createVuexStore } from 'vuex-simple';
import { getWeekNumber, getListOfDays, getMonthYear, getTodaysDate } from '../utils/utils';
import { IPayload, IPayloadExtended, IData, /*ELEMENT_ID, LIST_OF_DAYS, LIST_OF_EMPTY_DAYS, MONTH, WEEK_DAYS */ } from './types';



// const listOfDays = getListOfDays();
// const listOfEmptyDays = getWeekNumber();
// const month = getMonthYear();
const todaysDate = getTodaysDate();

export class MyStore {
    @State()
    public idToHighlight: number = todaysDate;

    // readonly listOfDays: LIST_OF_DAYS = listOfDays;

    // readonly listOfEmptyDays: LIST_OF_EMPTY_DAYS = listOfEmptyDays;

    // readonly month: MONTH = month;

    // readonly weekDays: WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];

    public data: IData = {
        14: [
            {
                taskName: 'Выполнить тестовое',
                isCompleted: true,
                id: 1,

            },
        ],
    }

    // @Getter()
    // public get getElementId(): ELEMENT_ID {
    //     return this.elementId;
    // }

    // @Getter()
    // public get getListOfDays(): LIST_OF_DAYS {
    //     return this.listOfDays;
    // }

    // @Getter()
    // public get getListOfEmptyDays(): LIST_OF_EMPTY_DAYS {
    //     return this.listOfEmptyDays;
    // }

    // @Getter()
    // public get getMonth(): MONTH {
    //     return this.month;
    // }

    // @Getter()
    // public get getWeekDays(): WEEK_DAYS {
    //     return this.weekDays;
    // }

    // @Getter()
    // public get getData(): IData {
    //     return this.data;
    // }

    @Mutation()
    public updateWithId(id: number) {
        this.idToHighlight = id;
    }

    @Mutation()
    public updateWithEvent(payload: IPayload) {
        const { key, value } = payload;
        if (this.data[key]) {
            // Vue.set(this.data, key, [
            //     ...this.data[key],
            //     {
            //         taskName: value,
            //         isCompleted: false,
            //         id: Date.now(),
            //     },
            // ])
            this.data[key] = [
                ...this.data[key],
                {
                    taskName: value,
                    isCompleted: false,
                    id: Date.now(),
                },
            ];
        } else {
            Vue.set(this.data, key, [{
                taskName: value,
                isCompleted: false,
                id: Date.now(),
            },])
        };

    }

    @Mutation()
    public updateWithTaskStatus(payload: IPayloadExtended) {
        const { key, value } = payload;
        if (this.data[key]) {
            this.data[key].forEach((element) => {
                if (element.id === value.id) {
                    element.isCompleted = value.isCompleted;
                }
            });
        }
        // this.data = { ...this.data }
    }
}

Vue.use(Vuex);
const instance = new MyStore();

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
});