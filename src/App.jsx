import { useState } from 'react';
import Header from './components/header'
import MainLayout from './components/main-layout'
import Footer from './components/footer'
import PostCard from './components/post-card'
import {langContext} from './context'
import {langs} from './langs/langs'
 
const App = () => {
    const [currentLang, setCurrentLang] = useState('uz')
    const t = langs[currentLang]
    return (
        <>
        <langContext.Provider value={{currentLang, setCurrentLang, t}}>
            <Header/>
            <MainLayout>
                <PostCard/>
            </MainLayout>

            <Footer/>
        </langContext.Provider>
        </>
    );
};

export default App;