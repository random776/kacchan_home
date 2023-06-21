import Nyugakushiki from "/nyugakushiki.jpeg"
import Chikurin from "/chikurin.jpeg"
import Flower from "/flower.jpg"
import Funabashi from "/funabashi.jpeg"
import Logo from "/logoimage.jpeg"

export default function Header() {
    return (
        <>
        <header>
      <div className="header-logo-menu">
        <div id="nav-drawer">
          <input id="nav-input" type="checkbox" className="nav-unshown" />
          <label id="nav-open" htmlFor="nav-input"><span></span></label>
          <label className="nav-unshown" id="nav-close" htmlFor="nav-input"></label>
          <div id="nav-content">
            <header>
              <ul>
                <li><a href="./kacchan_home/" className="btn4">HOME</a></li>
                <li><a href="./kacchan_home/news" className="btn4">ニュース</a></li>
                <li><a href="./kacchan_home/contact" className="btn4">連絡先（SNS）</a></li>
                <li>
                  <a href="./kacchan_home/helpful" className="btn4"
                    >東大理系生お役立ちツール</a
                  >
                </li>
                <li><a href="./kacchan_home/link" className="btn4">外部リンク</a></li>
              </ul>
            </header>
          </div>
        </div>
        <div className="logo-area">
          <a href="./kacchan_home"
            ><img className="logo" src={Logo} alt=""
          /></a>
        </div>
      </div>
      <div id="menu-bar">
        <ul>
          <li><a href="./kacchan_home/" className="btn4">HOME</a></li>
          <li><a href="./kacchan_home/news" className="btn4">ニュース</a></li>
          <li><a href="./kacchan_home/contact" className="btn4">連絡先（SNS）</a></li>
          <li>
            <a href="./kacchan_home/helpful" className="btn4">東大理系生お役立ちツール</a>
          </li>
          <li><a href="./kacchan_home/link" className="btn4">外部リンク</a></li>
        </ul>
      </div>
      <div className="slide">
        <img className="item1" src={Nyugakushiki} alt="A" />
        <img className="item2" src={Chikurin} alt="B" />
        <img className="item3" src={Flower} alt="C" />
        <img className="item4" src={Funabashi} alt="D" />
      </div>
    </header>
        </>
    )
}