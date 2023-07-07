import { useFilter } from "../hooks/useFilter"
import "./Footer.css"

export const Footer = () => {
  const { filter } = useFilter()

  return (
    <footer className="footer">
      <p>{filter && JSON.stringify(filter)}</p>
    </footer>
  )
}
