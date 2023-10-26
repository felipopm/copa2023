import './App.css'
import Card from './components/Card'
import GameTable from './components/GameTable'

function App() {

  return (
    <>
      <h1>Copa do Mundo Feminina 2023</h1>
      <section className='cards'>
        <Card />
      </section>

      <h2>Tabela de jogos</h2>
      <section className='game_table'>
        <GameTable />
      </section>
    </>
  )
}

export default App
