import Card from "./Card.jsx"

function App() {
  return(
    <>
        <Card title="Dunkash" text = "I make pizza and eat it" isLoggedIn = {false}></Card>
        <Card title="Spongebob" text = "I make crabby patties" isLoggedIn = {true}></Card>
    </>
  )
  
}

export default App
