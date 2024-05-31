import Footer from './Footer';
import './MainPage.css';
import Notice from './Notice';
import Profille from './Profile';

const MainHomePage = () => {
    return(
        <>
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