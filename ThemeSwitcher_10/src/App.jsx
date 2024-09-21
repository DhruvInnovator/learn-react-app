import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'

function App() {

  const {thememode, setThemeMode} = useState("light")
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
  }),[thememode]

  return (

        <ThemeProvider value={{thememode,dartheme, lighttheme}}>
            <div className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                        {/*  */}
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                       {/*  */}
                    </div>
                </div>
            </div>
        </ThemeProvider>
  )
}

export default App
