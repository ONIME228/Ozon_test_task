import Vue from 'vue';
import Vuex from 'vuex';
import { Mutation, State, } from 'vuex-simple';
import { createVuexStore } from 'vuex-simple';
import { getTodaysDate } from '@/utils/utils';
import { IPayload, IPayloadExtended, IData, } from './types';




const todaysDate = getTodaysDate();

export class MyStore {
    @State()
    public idToHighlight: number = todaysDate;

    public data: IData = {
        14: [
            {
                taskName: 'Выполнить тестовое',
                isCompleted: true,
                id: 1,

            },
        ],
    }

    @Mutation()
    public updateWithId(id: number) {
        this.idToHighlight = id;
    }

    @Mutation()
    public updateWithEvent(payload: IPayload) {
        const { key, value } = payload;
        if (this.data[key]) {
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
    }
}

Vue.use(Vuex);
const instance = new MyStore();

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
});