const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="logo-box">
        <img src="/JavaScript.png" alt="JavaScript" className="logo-header" />
        <img src="/Python.png" alt="Python" className="logo-header" />
        <img src="/csharp.png" alt="C#" className="logo-header" />
      </div>
      <div className="text-box-main">
        <p>I'm an unapologetic <b className="language">JavaScript</b> developer, but it's fun, useful & <i>(good)</i> challenging to write code in other languages.</p>
        <p>This site is a callout to all my fellow <b className="language">JavaScript</b><i>ers / istonitas / fans? (Why don't we have out own cool moniker?)</i></p>
        <p>Let's check out a few other languages, specifically <b className="language">Python</b> and <b className="language">C#</b>!</p>
        <p>Why those?</p>
        <p>Why not!</p>
        <p>So sit back and enjoy my learnings and musings from building some simple <dfn title="Command line interface">CLI</dfn> applications. I discover some new <b className="language">Python</b> techniques and gradually get better at <b className="language">C#</b>!</p>
      </div>
    </header>
  )
}

export default Header

