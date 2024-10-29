import { data } from "../data/ProjectInfo";
import Code from "./Code"

import PasswordStrengthChecker from "./projects/PasswordStrengthChecker";

const Project = () => {


  const mvpContent = data[0].passwordStrengthChecker.mvp;
  return (
    <article>
      <h3>{data[0].passwordStrengthChecker.title}</h3>
      <div className="project-information">
        <div className="project">
          <div className="text-box">
            <h4>MVP</h4>
            <div dangerouslySetInnerHTML={{ __html: mvpContent }} />
          </div>
        </div>
        <div className="web">
          <PasswordStrengthChecker />
        </div>
      </div>
      <div className="project-code">
        <Code
          title="Python"
          language="python"
          code={data[0].passwordStrengthChecker.code.python}
        />
        <Code
          title="JavaScript"
          language="javascript"
          code={data[0].passwordStrengthChecker.code.javascript}
        />
        <Code
          title="C#"
          language="csharp"
          code={data[0].passwordStrengthChecker.code.csharp}
        />

      </div>
    </article>
  )
}

export default Project