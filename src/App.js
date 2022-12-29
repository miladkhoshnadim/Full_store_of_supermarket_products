import "./App.css";
import { PageHome } from "./indexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/store" element={<Store />} /> */}
      </Routes>
    </BrowserRouter>

    // <>
    //   <PageHome />
    // </>
  );
}

export default App;
