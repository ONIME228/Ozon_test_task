import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import { MyStore } from '@/store/store';
import { useStore } from 'vuex-simple';

//TSX Interface
interface Props {
    text: string,
    id?: number | string,
}


@Component
export default class UnitCalendar extends VueComponent<Props>{
    public store: MyStore = useStore(this.$store)
    @Prop() private text!: string;
    @Prop() private id!: number;

    handleClick() {
        this.store.updateWithId(Number(this.id));
    }

    render() {
        const { text, id, handleClick } = this;


        if (!id && !text) {
            return <div></div>
        } else {
            return (
                <span onClick={handleClick} id={id} >{text} </span>
            )
        }

    }
}