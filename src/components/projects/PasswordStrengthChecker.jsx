import styles from './PasswordStrengthChecker.module.css'

const PasswordStrengthChecker = () => {
  const strengthDisplay = document.getElementById('strength-display');
  const strengthCodes = ["Not even a password", "Very weak", "Weak", "Medium", "Strong", "Very Strong"];

  const testPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    const conditions = [
      /[A-Z]/,
      /[a-z]/,
      /[0-9]/,
      /[!@#$%^&*\-_=+?/\<>.,:;'\"[\]{}]/,
    ];
    for (const condition of conditions) {
      if (condition.test(password)) strength++;
    };
    return strength;
  }

  const handleClick = (e) => {
    e.preventDefault()
    const password = document.querySelector('#text').value
    strengthDisplay.innerHTML = `${strengthCodes[testPasswordStrength(password)]}`;
  };

  return (
    <div className={styles.passwordChecker}>
      <div className={styles.setup}>
        <label htmlFor="input">Enter your password: </label>
        <input type="text" className={styles.input} id="text" />
      </div>
      <div className={styles.interaction}>
        <button className={styles.button} onClick={handleClick}>Check Password</button>
        <div id="strength-display" className={styles.strengthDisplay}></div>
      </div>
    </div>
  )
}

export default PasswordStrengthChecker