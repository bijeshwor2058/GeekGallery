import styles from './header.module.css'
const Header = () => {
  return (
    <nav className={styles.nav_bar}>
      <div>
          <span>GeekGallery</span>
      </div>

      <div id='searchDiv'>
        <input type="text" placeholder='Search' />
        <button id='searchBtn'>Search</button>
      </div>
    </nav>
  )
}

export default Header