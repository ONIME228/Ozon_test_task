import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import { getWeekNumber, getListOfDays, getMonthYear } from '../../utils/getWeekDay';
import styles from './ArticleTile.css?module'
import UnitCalendar from '../UnitCalendar/UnitCalendar';
// import store from '../../store/vuex-simple_store';
import { mapGetters, mapMutations } from 'vuex';
import { useStore } from 'vuex-simple';

//TSX Interface
interface Props {
    text: string,
    position: string,
}

@Component
export default class ArticleTile extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private position!: string;
    public store: any = useStore(this.$store)
    // listOfDays = getListOfDays();
    // listOfEmptyDays = getWeekNumber();
    // title = getMonthYear();
    // weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',];
    // vuex
    // data: any = {
    //     1: [],
    // } 
    // elementToHighlight = 0;
    // targetElement: string = '0';
    // methods() {
    //     return { ...mapGetters(['getElementId']) }
    // }
    handleClick(e: any): void {
        if (e.target.closest('span')) {
            const element = document.getElementById(this.store.getElementId);
            // console.log('store', this.store);
            if (element) element.classList.remove(styles.chosenDay);
            this.store.updateWithId(e.target.getAttribute('id'));
            e.target.classList.add(styles.chosenDay);
        }
    }


    render() {
        const { store } = this;
        // console.log('render Article Tile');
        //Store getters
        const idToHighlight = store.getElementId;
        // const idToHighlight: any = this.methods().getElementId;
        const listOfDays = store.getListOfDays;
        const listOfEmptyDays = store.getListOfEmptyDays;
        const month = store.getMonth;
        const weekDays = store.getWeekDays;
        const { text, position, /*listOfDays,*/ /*weekDays,*/ /*listOfEmptyDays,*/ /*title*/ } = this;
        const { articleBlock, daysWeek, calendarTitle, days, chosenDay, filled } = styles;

        return (
            < article
                style={position ? `margin-${position}:auto;` : ''}
                class={articleBlock}
            >
                <h5 class={calendarTitle}> {month} </h5>
                <div class={daysWeek}>
                    {weekDays.map((day: string) => <UnitCalendar id={NaN} text={String(day)} />)}
                </div>
                <div class={days} onClick={this.handleClick} >
                    {listOfEmptyDays.map((day: any) => <UnitCalendar id={NaN} text={''} />)}
                    {/* {listOfDays.map(day => <UnitCalendar  text={String(day)} />)} */}
                    {listOfDays.map((day: any) => {
                        // console.log(store.getData[day]);
                        if (day === listOfDays[idToHighlight - 1]) {
                            return <UnitCalendar id={day} class={chosenDay} text={String(day)} />
                        } else if (store.getData[day] && store.getData[day].length) {
                            console.log('FLAG', store.getData[day]);
                            return <UnitCalendar id={day} class={filled} text={String(day)} />
                        }
                        return <UnitCalendar id={day} text={String(day)} />
                    })}
                </div>
            </article >
        )
    }
}