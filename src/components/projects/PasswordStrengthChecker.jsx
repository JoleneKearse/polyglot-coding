import React from 'react'

const PasswordStrengthChecker = () => {
  return (
    <div>
      <h4>JavaScript</h4>
        <label htmlFor="input">Enter your password: </label>
        <input type="text" className="text" />
        <button className="button">Check Password</button>
        <div id="strength-display"></div>
    </div>
  )
}

export default PasswordStrengthChecker