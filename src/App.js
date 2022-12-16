
import './App.css';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDetails from './components/FormDetails';
import InputForm from './components/InputForm';
import HeaderDesign from './components/HeaderDesign';
import FooterTWC from './components/FooterTWC';

function App() {
  return (
    <div className='className="d-grid gap-'>
      <NavMenu></NavMenu>
      <HeaderDesign></HeaderDesign>
    {/* <FormDetails> </FormDetails> */}
 <InputForm></InputForm>
 <FooterTWC></FooterTWC>
 
    </div>
  );
}

export default App;
