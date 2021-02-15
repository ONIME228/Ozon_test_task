import { Component } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import { useStore } from 'vuex-simple';
import UnitCalendar from '../UnitCalendar/UnitCalendar';
import { Istate } from '../../store/store_interfaces';

import styles from './CalendarTile.css?module'

interface ImouseEvent {
    target: HTMLElement
}

@Component
export default class CalendarTile extends VueComponent {
    public store: Istate = useStore(this.$store)
    //Methods for events
    handleClick(event: ImouseEvent) {
        if (event.target.closest('span')) {
            const element = document.getElementById(String(this.store.getElementId));
            if (element) element.classList.remove(styles.chosenDay);
            this.store.updateWithId(Number(event.target.getAttribute('id')));
            event.target.classList.add(styles.chosenDay);
        }
    }

    render() {
        const { calendarBlock, daysWeek, calendarTitle, days, chosenDay, filledDay } = styles;
        const { store } = this;
        const idToHighlight = store.getElementId;
        const listOfDays = store.getListOfDays;
        const listOfEmptyDays = store.getListOfEmptyDays;
        const month = store.getMonth;
        const weekDays = store.getWeekDays;
        const data = store.getData;

        return (
            < article class={calendarBlock}>
                <h5 class={calendarTitle}> {month} </h5>
                <div class={daysWeek}>
                    {weekDays.map((day: string) => <UnitCalendar id={NaN} text={String(day)} />)}
                </div>
                <div class={days} onClick={this.handleClick} >
                    {listOfEmptyDays.length ? '' : listOfEmptyDays.map(() => <UnitCalendar id={NaN} text={''} />)}
                    {listOfDays.map((day: number) => {
                        if (day === listOfDays[idToHighlight - 1]) {
                            return <UnitCalendar id={day} class={chosenDay} text={String(day)} />
                        } else if (data[day] && data[day].length) {
                            return <UnitCalendar id={day} class={filledDay} text={String(day)} />
                        }
                        return <UnitCalendar id={day} text={String(day)} />
                    })}
                </div>
            </article >
        )
    }
}