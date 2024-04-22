import './App.css';
import Calendar from './components/Calendar';
import CalendarHeader from './components/CalendarHeader';

function App() {
  return (
    <div className="App">
      <CalendarHeader/>
      <Calendar />
    </div>
  );
}

export default App;
