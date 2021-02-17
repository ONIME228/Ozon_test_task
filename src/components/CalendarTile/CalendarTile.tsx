import { Component } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import { useStore } from 'vuex-simple';
import UnitCalendar from '@/components/UnitCalendar/UnitCalendar';
import { getListOfDays, getWeekNumber, getMonthYear, } from '@/utils/utils';
import { MyStore } from '@/store/store';
import styles from './CalendarTile.css?module'



const { calendarBlock, daysWeek, calendarTitle, days, } = styles;
const listOfDays = getListOfDays();
const listOfEmptyDays = getWeekNumber();
const month = getMonthYear();
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];

@Component
export default class CalendarTile extends VueComponent {

    public store: MyStore = useStore(this.$store)

    getClassName(day: number) {
        if (day === listOfDays[this.store.idToHighlight - 1]) {
            return styles.chosenDay;
        }
        if (this.store.data[day] && this.store.data[day].length) {
            return styles.filledDay;
        }
        return '';
    };


    render() {
        return (
            <article class={calendarBlock}>
                <h5 class={calendarTitle}> {month} </h5>
                <div class={daysWeek}>
                    {weekDays.map((day: string) => <UnitCalendar key={day} text={String(day)} />)}
                </div>
                <div class={days} >
                    {listOfEmptyDays.length ? listOfEmptyDays.map((el: number) => <UnitCalendar key={String(el)} id={''} text={''} />) : ''}
                    {listOfDays.map((day: number) => {
                        return <UnitCalendar class={this.getClassName(day)} key={String(day)} id={day} text={String(day)} />
                    })}
                </div>
            </article >
        )
    }
}