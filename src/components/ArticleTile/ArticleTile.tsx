import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import { getWeekNumber, getListOfDays, getMonthYear } from '../../utils/getWeekDay';
import styles from './ArticleTile.css?module'
import UnitCalendar from '../UnitCalendar/UnitCalendar';

//TSX Interface
interface Props {
    text: string,
    position: string,
}

@Component
export default class ArticleTile extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private position!: string;

    listOfDays = getListOfDays();
    listOfEmptyDays = getWeekNumber();
    title = getMonthYear();
    weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];
    // vuex
    data: any = {
        1: [],
    }
    elementToHighlight = 0;
    target: string = '1';

    handleClick(e: any): void {
        if (e.target.closest('span')) {
            const elementId = document.getElementById(this.target);
            if (elementId) {
                elementId.classList.remove(styles.chosenDay);
            }
            this.target = e.target.getAttribute('id')
            console.log(this.target);
            e.target.classList.add(styles.chosenDay);
            // this.data[`${e.target.textContent}`] = 'kek';
            // console.log(this.data)
            // e.target.classList.add(styles.chosenDay)
        }
    }

    // mounted(): void {
    //     this.listOfDays = getListOfDays();
    // }

    render() {
        console.log('render',);
        const { text, position, listOfDays, weekDays, listOfEmptyDays, title } = this;
        const { articleBlock, daysWeek, calendarTitle, days, chosenDay } = styles;
        console.log(this.listOfEmptyDays);
        return (
            < article
                style={position ? `margin-${position}:auto;` : ''}
                class={articleBlock}
            >
                <h5 class={calendarTitle}> {title} </h5>
                <div class={daysWeek}>
                    {weekDays.map(day => <UnitCalendar id={NaN} text={String(day)} />)}
                </div>
                <div class={days} onClick={this.handleClick} >
                    {listOfEmptyDays.map(day => <UnitCalendar id={NaN} text={''} />)}
                    {/* {listOfDays.map(day => <UnitCalendar  text={String(day)} />)} */}
                    {listOfDays.map(day => {
                        if (day === listOfDays[this.elementToHighlight]) {
                            return <UnitCalendar id={day} class={chosenDay} text={String(day)} />
                        }
                        return <UnitCalendar id={day} text={String(day)} />
                    })}
                </div>
            </article >
        )
    }
}