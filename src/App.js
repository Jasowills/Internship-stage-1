import Image from "./components/Image";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Profiles from "./components/Profiles";
function App() {
  return (
    <div className="container">
      <Image />
      <Links text={'Twitter Link'} href={'https://twitter.com/Jasowills'} />
      <Links text={'Zuri Team'} href={ 'https://training.zuri.team/'} />
      <Links text={'Zuri Books'} href={'http://books.zuri.team'} />
      <Links text={'Python Books'} href={'https://books.zuri.team'}/>
      <Links text={'Background Check for Coders'} href={ 'https://background.zuri.team'} />
      <Links text={'Design Books'} href={'https://books.zuri.team/design-rules'} />
      <Profiles />
      <Footer />
    </div>
  );
}

export default App;
