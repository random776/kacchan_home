import Header from "../../Basic/index"
import SubMenu from "../../Basic/menuBar";

export default function Result() {
    return (
        <>
        <Header />
        <div className="sonota">
            <h2 className="color">共通テスト予想問題</h2>
            <p>共通テスト予想問題（笑）の作成中です。パロディー程度のものなので、共通テスト対策としての実用性は皆無です。期待していた方がいらっしゃったらごめんなさい。</p>
            <ul className="height">
                <li><a href="https://random776.github.io/kacchan_uts2_22/pdf/butsuri.pdf"></a></li>
            </ul>
        </div>
        <SubMenu />
        </>
    )
}