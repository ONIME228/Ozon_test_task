import { Component, Vue } from 'vue-property-decorator';

import CalendarTile from './components/CalendarTile/CalendarTile';
import EventTile from './components/EventTile/EventTile';



import './App.css'


@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <CalendarTile />
        <EventTile />
      </div>
    )
  }
}
