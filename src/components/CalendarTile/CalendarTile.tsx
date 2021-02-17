import { Component } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import { useStore } from 'vuex-simple';
import UnitCalendar from '@/components/UnitCalendar/UnitCalendar';
import { getListOfDays, getWeekNumber, getMonthYear, } from '@/utils/utils';
import { MyStore } from '@/store/store';
import styles from './CalendarTile.css?module'

interface ImouseEvent {
    target: HTMLElement
}

const { calendarBlock, daysWeek, calendarTitle, days, chosenDay, filledDay } = styles;
const listOfDays = getListOfDays();
const listOfEmptyDays = getWeekNumber();
const month = getMonthYear();
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];

// const getWeekDays = () => listOfEmptyDays.length ? listOfEmptyDays.map(() => <UnitCalendar id={''} text={''} />) : ''; 

@Component
export default class CalendarTile extends VueComponent {

    public store: MyStore = useStore(this.$store)

    // Понимаю, что при любой смене структуре - обработчик упадет, но все же решил 
    //, что добавить один тяжелый обработчик лучше, чем добавлять кучу маленьких 
    handleClick(event: ImouseEvent) {
        if (/span/i.test(event.target.tagName)) {
            const element = document.getElementById(String(this.store.idToHighlight));
            if (element) element.classList.remove(styles.chosenDay);
            this.store.updateWithId(Number(event.target.getAttribute('id')));
            event.target.classList.add(styles.chosenDay);
        }
    }


    render() {
        const { store: { idToHighlight, data } } = this;

        return (
            < article class={calendarBlock}>
                <h5 class={calendarTitle}> {month} </h5>
                <div class={daysWeek}>
                    {weekDays.map((day: string) => <UnitCalendar text={String(day)} />)}
                </div>
                <div class={days} onClick={this.handleClick} >
                    {listOfEmptyDays.length ? listOfEmptyDays.map(() => <UnitCalendar id={''} text={''} />) : ''}
                    {/* {getWeekDays} */}
                    {listOfDays.map((day: number) => {
                        if (day === listOfDays[idToHighlight - 1]) {
                            return <UnitCalendar key={String(day)} id={day} class={chosenDay} text={String(day)} />
                        } else if (data[day] && data[day].length) {
                            return <UnitCalendar key={String(day)} id={day} class={filledDay} text={String(day)} />
                        }
                        return <UnitCalendar key={String(day)} id={day} text={String(day)} />
                    })}
                </div>
            </article >
        )
    }
}