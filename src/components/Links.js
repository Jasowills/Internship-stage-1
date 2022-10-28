
const Links = ({ text, href }) => {
  return (
      <button className="links">
          <a href={href}>{text}</a>
    </button>
  )
}

export default Links