import Vue from 'vue';
import Vuex from 'vuex';
import { Mutation, State, Getter } from 'vuex-simple';
import { createVuexStore } from 'vuex-simple';
import { getWeekNumber, getListOfDays, getMonthYear, getTodaysDate } from '../utils/utils';
import { Ipayload, IpayloadExtended, Idata, ElementId, ListOfDays, ListOfEmptyDays, Month, WeekDays } from './store_interfaces';



const listOfDays = getListOfDays();
const listOfEmptyDays = getWeekNumber();
const month = getMonthYear();
const todaysDate = getTodaysDate();

class MyStore {
    @State()
    public elementId: ElementId = todaysDate;
    readonly listOfDays: ListOfDays = listOfDays;
    readonly listOfEmptyDays: ListOfEmptyDays = listOfEmptyDays;
    readonly month: Month = month;
    readonly weekDays: WeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];
    public data: Idata = {
        14: [
            {
                taskName: 'Выполнить тестовое',
                isCompleted: true,
                id: 1,

            },
        ],
    }

    @Getter()
    public get getElementId(): ElementId {
        return this.elementId;
    }
    @Getter()
    public get getListOfDays(): ListOfDays {
        return this.listOfDays;
    }
    @Getter()
    public get getListOfEmptyDays(): ListOfEmptyDays {
        return this.listOfEmptyDays;
    }
    @Getter()
    public get getMonth(): Month {
        return this.month;
    }
    @Getter()
    public get getWeekDays(): WeekDays {
        return this.weekDays;
    }
    @Getter()
    public get getData(): Idata {
        return this.data;
    }

    @Mutation()
    public updateWithId(id: number) {
        this.elementId = id;
    }
    @Mutation()
    public updateWithEvent(payload: Ipayload) {
        const { key, value } = payload;
        if (this.data[key]) {
            Vue.set(this.data, key, [
                ...this.data[key],
                {
                    taskName: value,
                    isCompleted: false,
                    id: Date.now(),
                },
            ])
        } else {
            Vue.set(this.data, key, [{
                taskName: value,
                isCompleted: false,
                id: Date.now(),
            },])
        };

    }
    @Mutation()
    public updateWithTaskStatus(payload: IpayloadExtended) {
        const { key, value } = payload;
        if (this.data[key]) {
            this.data[key].forEach((element: any) => {
                if (element.id === value.id) {
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