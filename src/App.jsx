import "./App.css";
import List from "./components/List";
import Listitem from "./components/Listitem";
import Payment from "./components/Payment";
import Date from "./components/Date";
import Logo from "./components/Logo";
import Cases from "./components/Cases";
import Gift from "./components/Gift";
import Os from "./components/Os";
function App() {
  const data = [
    {
      id: "1",
      date: "28/10/2020",
      logo: "https://pngimg.com/uploads/amazon/amazon_PNG22.png",
      case: "case-study",
      gift: "Amazon-Gift",
      payment: "Pay",
      os: "Desktop-mobile",
      bg:" darkorange"
    },
    {
      id: "2",
      date: "25/07/2021",
      logo: "data:image/jpeg;base64,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",
      cases: "case-study",
      gift: "Apple-Gift",
      payment: "payment",
      os: "MacOS-Mobile",
      bg:"silver"
    },
  ];

  return (
    <div className="App">
      <List >
        {data.map((e) => (
          <Listitem bg={e.bg}>
            <div className="first-flex">
            <Date>{e.date}</Date>
            <Logo >{e.logo}</Logo>
            </div>
            <Cases>{e.cases}</Cases>
            <Gift>{e.gift}</Gift>
            <Payment>{e.payment}</Payment>
            <div>
            <Os>{e.os}</Os>
            
            </div>
          </Listitem>
        ))}
      </List>
    </div>
  );
}

export default App;
