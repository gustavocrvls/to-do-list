import '../styles/header.scss'
const logo = require('../assets/logo.svg');

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="to.do"/>
      </div>
    </header>
  )
}