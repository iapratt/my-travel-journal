import './App.css'
import data from "./components/data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

 

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        googleMapsUrl={item.googleMapsUrl}
      />
    )
  })
  return (
    <div className="App">
        <Navbar />
      <section className="cards-list">
        {cards}
        
      </section>
    </div>
  )
}

export default App
