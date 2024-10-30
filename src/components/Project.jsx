import React, { Suspense } from "react";
import { data } from "../data/ProjectInfo";
import Code from "./Code"


const Project = ({ projectKey }) => {
  const projectData = data[0][projectKey];
  const ProjectComponent = React.lazy(() => import(`./projects/${projectData.componentName}`));
  return (
    <article>
      <h3>{projectData.title}</h3>
      <div className="project-information">
        <div className="project">
          <div className="text-box">
            <h4>MVP</h4>
            <div dangerouslySetInnerHTML={{ __html: projectData.mvp }} />
          </div>
        </div>
        <div className="web">
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectComponent />
          </Suspense>
        </div>
      </div>
      <div className="project-code">
        <Code
          title="Python"
          language="python"
          code={projectData.code.python}
        />
        <Code
          title="JavaScript"
          language="javascript"
          code={projectData.code.javascript}
        />
        <Code
          title="C#"
          language="csharp"
          code={projectData.code.csharp}
        />

      </div>
    </article>
  )
}

export default Project