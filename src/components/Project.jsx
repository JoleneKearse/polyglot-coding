import PasswordStrengthChecker from "./projects/PasswordStrengthChecker"

const Project = ({ title, }) => {
  return (
    <article>
      <div className="project">
        <h3>{title}</h3>
        <div className="text-box">
          <h4>MVP</h4>
          <p>This is a very simple password strength checker designed as a learning exercise and <b>should not</b> not be used in reality!</p>
          <p>This app checks 5 conditions:</p>
          <ul>
            <li>At least 8 characters long</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one digit </li>
            <li>At least one special character</li>
          </ul>
          <p>For each met condition one point is added to the strength. Five levels are possible.</p>
        </div>
      </div>
      <div className="javascript">
        <PasswordStrengthChecker />
      </div>
    </article>
  )
}

export default Project