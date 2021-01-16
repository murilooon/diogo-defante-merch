import s from './Logo.module.css'

const Logo = ({ className = '', ...props }) => (
  <div>
    <img
      className={s.logo}
      id ="logo" 
      src="https://yt3.ggpht.com/ytc/AAUvwnhaKgBdPD6cd0xK1_VjOdeQfxOluXOHnK6g0Mio=s88-c-k-c0x00ffffff-no-rj" 
      alt="Cara do Diogo Defante" 
      width="80"
    />
  </div>
)

export default Logo
