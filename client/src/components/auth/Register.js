import React from 'react'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'


function Register() {
  const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault
    try {
      await registerUser(formdata)
      history.pushState('/login')
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
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formdata.username}
                />
              </label>
            </div>
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
              <label>
                <input
                  type="password"
                  className="form"
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="passwordConfirmation"
                  value={formdata.passwordConfirmation}
                />
              </label>
            </div>
            <div>
              <button type="submit">Register Me</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register