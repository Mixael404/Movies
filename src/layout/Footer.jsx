export default function Footer(){
    return (
        <footer className="page-footer light-blue darken-1">

          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Mixael404/Movies" target="blank">Repo</a>
            </div>
          </div>
        </footer>
    )
}