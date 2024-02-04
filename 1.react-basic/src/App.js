import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';


function App() {

const response = [
  {
    itemName: "Nirma",
    itemDate: "20",
    itemMonth: "June",
    itemyear:"1998"
  },

  {
    itemName: "Ariel",
    itemDate: "22",
    itemMonth: "July",
    itemyear:"1908"
  },

  {
    itemName: "Tide",
    itemDate: "18",
    itemMonth: "May",
    itemyear:"1990"
  },

  {
    itemName: "Ariel",
    itemDate: "12",
    itemMonth: "January",
    itemyear:"1994"
  }
]

  return (
    
    <div>
      <Card>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>

      <Item name={response[3].itemName}></Item>
      <ItemDate day={response[3].itemDate} month={response[3].itemMonth} year={response[3].itemyear}></ItemDate>
      
      <div className="App">
        hello
      </div>
      </Card>

    </div>
  );
}

export default App;

// Or we can make new variable and pass it into the required place.

// const itemTwoName = "Tide";