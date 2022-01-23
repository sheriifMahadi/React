import './App.css';
import Navbar from './components/Navbar'
// import Main from './components/Main'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  
  const cards = data.map(item => {
      return (
        <Card 
            key={item.id}
            item={item}  
        />
      )
  })

  return (
    <div>
        <Navbar />
        <Hero/>
        <section className="cards-list">
            {cards}
        </section>
    </div>
  );
}

export default App;
