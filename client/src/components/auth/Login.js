import React from 'react'
import { loginUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import { setToken } from '../../lib/auth'


function Login() {
  const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
  }


  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
      history.push('/teams/new')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <input
                  className="form"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="password"
                  className="form"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formdata.password}
                />
              </label>
            </div>
            <div>
              <button type="submit">Log Me In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login