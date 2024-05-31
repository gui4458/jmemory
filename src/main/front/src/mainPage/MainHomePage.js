import Footer from './Footer';
import Header from './Header';
import './MainPage.css';
import Notice from './Notice';
import Profille from './Profile';

const MainHomePage = () => {
    return(
        <>
            <Header/>
            <div className='contents'>
                <Notice />
                <Profille />
             </div>

            <div className='footers'>
                <Footer />  
            </div>   
        </>
 
    )
}

export default MainHomePage;