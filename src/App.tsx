import { Routes, Route } from "react-router-dom"
import { Layout } from '../components/layout/Layout';
import Home from "./pages"
import News from "./pages/News"
import Contact from "./pages/Contact"
import Helpful from "./pages/Helpful"
import Link from "./pages/Link"
import Test from "./pages/Test"
// ニュース
import A from "./pages/202304250001"
import B from "./pages/202304300001"
import C from "./pages/202305280001"
import D from "./pages/202305300001"
import E from "./pages/202306040001"
import F from "./pages/202306280001"
import G from "./pages/202307210001"
import H from "./pages/202312060001"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/kacchan_home/" element={<Home />}></Route>
        <Route path="/kacchan_home/news" element={<Layout />}>
          <Route index element={<News />}></Route>
        <Route path="202304250001" element={<A />}></Route>
        <Route path="202304300001" element={<B />}></Route>
        <Route path="202305280001" element={<C />}></Route>
        <Route path="202305300001" element={<D />}></Route>
        <Route path="202306040001" element={<E />}></Route>
        <Route path="202306280001" element={<F />}></Route>
        <Route path="202307210001" element={<G />}></Route>
        <Route path="202312060001" element={<H />}></Route>
        </Route>
        <Route path="/kacchan_home/contact" element={<Contact />}></Route>
        <Route path="/kacchan_home/helpful" element={<Helpful />}></Route>
        <Route path="/kacchan_home/link" element={<Link />}></Route>
        <Route path="/kacchan_home/test" element={<Test />}></Route>
        {/* ニュース */}
      </Routes>
    </>
  )
}