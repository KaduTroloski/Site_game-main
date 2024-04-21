import './Infos.css'


function Infos({ data }: any) {
  return (
    <>
      <div id="box">

        <div className="Score">
          <h3>You Scored</h3>
          <main className='Main_score'>
            <h3>{data[2]}</h3>
            <p>Coin's</p>
          </main>
        </div>
        <div className="PlayerInfos">
          <main className='Main_playerinfo'>
            <h3 className='flex_one'>Nickname</h3>
            <hr color='black' />
            <p className='flex_one'> {data[1]} </p>
          </main>
          <ul>
            <li>Deaths: {data[3]}</li>
            <li>Game Time: {data[4]}m:{data[5]}s</li>

          </ul>

        </div>
      </div>
    </>
  )
}
export default Infos;