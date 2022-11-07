import Articles from "./Articles";
import { useEffect,useState } from "react";

const Home = () => {
  const ls=window.localStorage
  const lsTheme=ls.getItem('theme')
  const themeState = (lsTheme!==null ? JSON.parse(lsTheme): {theme:'light-theme',switch:false})
  const [theme,setTheme] =useState(themeState);

  const switchHandler=()=>{
    if(!theme.switch){
      setTheme({theme:'dark-theme',switch:true})
      return ;
    }
    setTheme({theme:'light-theme',switch:false})
  }
  useEffect(()=>{
    ls.setItem('theme',JSON.stringify(theme))
    document.documentElement.className=theme.theme
  },[theme])
  return (
    <>
      <header className="header">
        <h1>Overreacted</h1>
        <div className="toggle--btn ">
        <div className={ !theme.switch ? "toggle__circle" : "toggle__circle switcher"}></div>
        {/* dark switch */}
          <div className="toggle__switch" onClick={switchHandler}></div>
        </div>
      </header>
      <Articles/>
    </>
  )
};

export default Home;
 