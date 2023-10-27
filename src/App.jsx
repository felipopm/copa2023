import './App.css'
import Card from './components/Card'
import GameTable from './components/GameTable'
import GroupStandings from './components/GroupStandings'
import KnockoutStage from './components/KnockoutStage'

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

      <h2>Classificação por grupo</h2>
      <section className='group_table'>
        <GroupStandings />
      </section>

      <h2>Oitavas de final</h2>
      <section className='knockout_table'>
        <KnockoutStage fase="oitavas"/>
      </section>
      

    </>
  )
}

export default App
