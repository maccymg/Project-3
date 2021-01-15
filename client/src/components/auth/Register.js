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
  const [isError, setIsError] = React.useState(false)

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
    setIsError(false)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      if (formdata !== '') {
        await registerUser(formdata)
        history.push('/login')
      } else {
        throw new Error
      }
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }

  return (
    <section className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formdata.username}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formdata.email}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <input
                type="password"
                className="input"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formdata.password}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              <input
                type="password"
                className="input"
                placeholder="Password Confirmation"
                onChange={handleChange}
                name="passwordConfirmation"
                value={formdata.passwordConfirmation}
              />
            </label>
          </div>
          <div className="footer">
            <button type="submit" className="button">Register Me</button>
          </div>
          {isError && <p>Check your forms are correct?</p>}
        </form>
      </div>
    </section>
  )
}

export default Register