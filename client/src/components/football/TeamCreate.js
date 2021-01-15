import React from 'react'
import Nav from '../common/Nav'
import Select from 'react-select'
import { getAllPlayers, createTeam } from '../../lib/api'
import { useHistory } from 'react-router-dom'


function TeamCreate() {
  const history = useHistory()
  const [players, setPlayers] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

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
      // if (player.secondName === player.webName) {
      //   value = `${player.firstName} ${player.secondName}`
      //   label = `${player.firstName} ${player.secondName}`
      // } else {
      value = `${player.webName}`
      label = `${player.webName}`
      // }
      const option = { value: value, label: label }
      selectOptions.push(option)
    })
    :
    console.log('loading')



  const [formdata, setFormdata] = React.useState({
    teamName: '',
    goalkeeper: '',
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


  // const [idTeamdata, setIdTeamdata] = React.useState({
  //   teamName: '',
  //   goalkeeper: '',
  //   defenders: [],
  //   midfielders: [],
  //   attackers: []
  // })

  
  const handleChange = event => {
    const value = event.target.value
    setFormdata({ ...formdata, [event.target.name]: value })
    setIsError(false)
  }

  const handleSingleChange = (selected,name) => {
    const value = selected ? selected.value : ''
    handleChange({ target: { name, value } })
  }

  function findPlayerIdByName(name, players) {
    if (!name) {
      return null
    } else {
      return players.find(player => player.webName === name)._id
    }
  }
  
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      if (formdata !== '') {
      // window.alert(`Submitting ${JSON.stringify(formdata, null, 2)}`)
        const teamData = {
          name: formdata.teamName,
          goalkeeper: formdata.goalkeeper,
          defenders: [formdata.playerTwo, formdata.playerThree, formdata.playerFour, formdata.playerFive],
          midfielders: [formdata.playerSix, formdata.playerSeven, formdata.playerEight],
          attackers: [formdata.playerNine, formdata.playerTen, formdata.playerEleven]
        }

        const teamDataWithIds = {
          ...teamData,
          goalkeeper: findPlayerIdByName(teamData.goalkeeper, players),
          defenders: teamData.defenders.map(name => findPlayerIdByName(name, players)),
          midfielders: teamData.midfielders.map(name => findPlayerIdByName(name, players)),
          attackers: teamData.attackers.map(name => findPlayerIdByName(name, players))
        }
        // setIdTeamdata(teamDataWithIds)
        // console.log(idTeamdata)
        const { data } = await createTeam(teamDataWithIds)
        // console.log(data)
        history.push(`/teams/${data._id}`)
      } else {
        throw new Error
      }
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }




  return (
    <div className="main">
      <section className="s-nav">
        <Nav />
      </section>
      <form className="total-form" onSubmit={handleSubmit}>
        <section className="first-form">
          <div className="team-name-box">
            <label className="input">Team Name</label>
            <input
              className="team-name"
              name="teamName"
              value={formdata.teamName}
              onChange={handleChange}
            />
          </div>
          <div className="goalkeeper-position">
            <div className="goalkeeper-shirt"></div>
            <label>GK</label>
            <Select
              className="select"
              options={selectOptions}
              label="Single select"
              defaultValue=''
              name="goalkeeper"
              onChange={(selected) => handleSingleChange(selected, 'goalkeeper')}
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
          <div className="position-striker">
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
          {isError && <p>Please Make sure youve filled out all the players including the team name and that youre logged in!!</p>}
        </section>
      </form>
    </div>
  )
}

export default TeamCreate