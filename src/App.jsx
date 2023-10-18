// css
import "./styles/index.css";
import "./styles/fonts.css";

// components
import Header from "./components/Header";
import Card from "./components/Card";

// data array
import cardsData from "./data";

function App() {
  const cards = cardsData.map((card) => {
    return (
      <Card
        key={card.cardId}
        card={card}
      />
    );
  });

  return (
    <>
      <Header />
      <main>
        <section id="places">
          {cards}
        </section>
      </main>
    </>
  );
}

export default App;
