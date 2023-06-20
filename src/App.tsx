import { Routes, Route } from "react-router-dom"
import { Layout } from '../components/layout/Layout';
import Home from "./pages"
import News from "./pages/News"
import Contact from "./pages/Contact"
import Helpful from "./pages/Helpful"
import Link from "./pages/Link"
// ニュース
import A from "./pages/202304250001"
import B from "./pages/202304300001"
import C from "./pages/202305280001"
import D from "./pages/202305300001"
import E from "./pages/202306040001"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/kacchan_new/" element={<Home />}></Route>
        <Route path="/kacchan_new/news" element={<Layout />}>
          <Route index element={<News />}></Route>
        <Route path="202304250001" element={<A />}></Route>
        <Route path="202304300001" element={<B />}></Route>
        <Route path="202305280001" element={<C />}></Route>
        <Route path="202305300001" element={<D />}></Route>
        <Route path="202306040001" element={<E />}></Route>
        </Route>
        <Route path="/kacchan_new/contact" element={<Contact />}></Route>
        <Route path="/kacchan_new/helpful" element={<Helpful />}></Route>
        <Route path="/kacchan_new/link" element={<Link />}></Route>
      </Routes>
    </>
  )
}