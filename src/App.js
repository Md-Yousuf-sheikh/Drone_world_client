import { Route, Routes } from 'react-router-dom';
import Account from './Components/Admin/Account/Account/Account';
import Dashboard from './Components/Admin/Dashbord/Dashbord/Dashboard';
import Setting from './Components/Admin/Setting/Setting/Setting';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import About from './Components/Pages/About/About/About';
import ContactUs from './Components/Pages/Contact/Contact/ContactUs';
import DronesEquipment from './Components/Pages/DronesEquipment/DronesEquipment/DronesEquipment';
import Home from './Components/Pages/Home/Home/Home';
import Media from './Components/Pages/Media/Media/Media';
import Service from './Components/Pages/Service/Service/Service';
import Shop from './Components/Pages/Shop/Shop/Shop';


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/drones-equipment" element={<DronesEquipment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
