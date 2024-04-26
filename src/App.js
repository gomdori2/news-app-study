import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    // 라우터 연결 먼저 할 것
    <Routes>
      <Route path="/" element={<NewsPage />} />
      {/* 파람으로 제어 */}
      <Route path="/:category" element={<NewsPage />} />
      {/* <Route path="/a" element={<NewsItem />} /> */}
    </Routes>
  );
}

export default App;
