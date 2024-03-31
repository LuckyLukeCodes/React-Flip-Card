import CardContainer from "./components/CardContainer";
import st1 from "./assets/images/st1.jpg";
import st2 from "./assets/images/st2.jpg";
import st3 from "./assets/images/st3.jpg";

const data = [
  {
    text: "Look out boss they are coming for us!",
    image: st1,
  },
  {
    text: "The Jedi way is the only way for me.",
    image: st3,
  },
  {
    text: "We will hunt you scum to the end.",
    image: st2,
  },
];

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 lg:flex-row">
      {data.map((item, index) => (
        <CardContainer key={index} {...item} />
      ))}
    </div>
  );
}

export default App;
