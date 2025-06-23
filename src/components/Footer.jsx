function Footer() {
    const  year  = new Date()
  return (
    <div className="footer" >
        <hr />
        <p>&copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer