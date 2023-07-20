import { Route , Routes} from "react-router-dom"
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IdealWeight from "./components/IdealWeight";
import Bmi from "./components/Bmi";
import BodyFat from "./components/BodyFat";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        <Route path="/ideal-weight" element={<IdealWeight />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/body-fat" element={ <BodyFat /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
