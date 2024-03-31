import CardContainer from "./components/CardContainer";
import st1 from "./assets/images/st1.jpg";
import st2 from "./assets/images/st2.jpg";
import st3 from "./assets/images/st3.jpg";

const data = () => [
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: { st1 },
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: { st3 },
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: { st2 },
  },
];

function App() {
  return (
    <div className="flex h-screen items-center justify-center gap-6">
      <CardContainer text="Look out boss they are coming for us!" image={st1} />
      <CardContainer text="The Jedi way is the only way for me." image={st3} />
      <CardContainer text="We will hunt you scum to the end." image={st2} />
    </div>
  );
}

export default App;
