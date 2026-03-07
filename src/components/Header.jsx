import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <li>
        <Link to ={'/inicio'} className="nav-link active" aria-current="page" href="#"></Link>
      </li>
    </div>
  )
}
