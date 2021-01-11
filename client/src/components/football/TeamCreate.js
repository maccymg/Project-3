import React from 'react'
import Nav from '../common/Nav'
import Select from 'react-select'
import { getAllPlayers } from '../../lib/api'


function TeamCreate() {

  const [players, setPlayers] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllPlayers()
        setPlayers(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  const selectOptions = [
    
  ]

  players ?
    players.map(player => {
      let value = ''
      let label = ''
      if (player.second_name === player.web_name) {
        value = `${player.first_name} ${player.second_name}`
        label = `${player.first_name} ${player.second_name}`
      } else {
        value = `${player.web_name}`
        label = `${player.web_name}`
      }
      const option = { value: value, label: label }
      selectOptions.push(option)
    })
    :
    console.log('error')



  const [formdata, setFormdata] = React.useState({
    playerOne: '',
    playerTwo: '',
    playerThree: '',
    playerFour: '',
    playerFive: '',
    playerSix: '',
    playerSeven: '',
    playerEight: '',
    playerNine: '',
    playerTen: '',
    playerEleven: ''
  })

  const [teamdata, setTeamdata] = React.useState({
    teamArray: []
  })
  
  const handleChange = event => {
    const value = event.target.value
    setFormdata({ ...formdata, [event.target.name]: value })
    setTeamdata({ ...teamdata, [event.target.name]: value })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    console.log(teamdata)
    window.alert(`Submitting ${JSON.stringify(formdata, null, 2)}`)
  }
  
  const handleSingleChange = (selected,name) => {
    const value = selected ? selected.value : ''
    handleChange({ target: { name, value } })
  }


  return (
    <div className="main">
      <section className="s-nav">
        <Nav />
      </section>
      <form className="total-form" onSubmit={handleSubmit}>
        <section className="s-form">
          <div className="position">
            <div className="shirt"></div>
            <label>GK</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerOne"
              onChange={(selected) => handleSingleChange(selected, 'playerOne')}
            />
          </div>
        </section>
        <section className="s-form">
          <div className="position">
            <div className="shirt"></div>
            <label>LB</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerTwo"
              onChange={(selected) => handleSingleChange(selected, 'playerTwo')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>CB</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerThree"
              onChange={(selected) => handleSingleChange(selected, 'playerThree')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>CB</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerFour"
              onChange={(selected) => handleSingleChange(selected, 'playerFour')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>RB</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerFive"
              onChange={(selected) => handleSingleChange(selected, 'playerFive')}
            />
          </div>
        </section>
        <section className="s-form">
          <div className="position">
            <div className="shirt"></div>
            <label>LCM</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerSix"
              onChange={(selected) => handleSingleChange(selected, 'playerSix')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>CDM</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerSeven"
              onChange={(selected) => handleSingleChange(selected, 'playerSeven')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>RCM</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerEight"
              onChange={(selected) => handleSingleChange(selected, 'playerEight')}
            />
          </div>
        </section>
        <section className="s-form">
          <div className="position">
            <div className="shirt"></div>
            <label>LW</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerNine"
              onChange={(selected) => handleSingleChange(selected, 'playerNine')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>ST</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerTen"
              onChange={(selected) => handleSingleChange(selected, 'playerTen')}
            />
          </div>
          <div className="position">
            <div className="shirt"></div>
            <label>RW</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="playerEleven"
              onChange={(selected) => handleSingleChange(selected, 'playerEleven')}
            />
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default TeamCreate