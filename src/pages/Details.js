import CountryDetails from '../components/CountryDetails';
import ToolBar from '../components/ToolBar';

const Details = () => (
  <>
    <header className="bg-pink-odd"><ToolBar /></header>
    <main className="bg-pink-odd">
      <CountryDetails />
    </main>
  </>
);

export default Details;
