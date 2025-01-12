import { useState } from "react";
// import './App.css'
import { Content } from './components/content/content'
import { Header } from './components/header/header'
import { Title } from './components/title/title'
import { Footer } from "./components/footer/footer";

function App() {
  const [currentContent, setCurrentContent] = useState('profile');
  return (
    <>
      <Header setCurrentContent={setCurrentContent} />
      <main>
        <Title />
        <Content currentContent={currentContent} />
      </main>
      <Footer />
    </>
  )
}

export default App
