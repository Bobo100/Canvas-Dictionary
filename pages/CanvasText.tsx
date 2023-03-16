import Link from "next/link";
import Layout from "../components/layout";

function CanvasText() {
    return (
        <Layout>
            <div>
                <h1>Canvas的文字繪製</h1>
                <p>在上一篇我們介紹了Canvas的基本繪圖功能，接下來我們要介紹Canvas的文字繪製</p>
                <h2>Canvas的文字繪製</h2>
                <p>Canvas的文字繪製跟繪製圖形的方法差不多，只是要多一個fillText()方法</p>
                <p>fillText()方法有三個參數，第一個是要繪製的文字，第二個是文字的x座標，第三個是文字的y座標</p>
                <p>而文字的顏色則是由fillStyle來設定</p>
                <p>接著我們來看一個範例</p>
                <p>首先我們要先設定文字的顏色</p>
                <p>然後我們要呼叫fillText()方法</p>
                <p>最後我們要呼叫fill()方法</p>
                <p>這樣我們就可以在Canvas上繪製文字了</p>
            </div>
            <div className="link_container">
                <Link href="/CanvasStyles">
                    上一篇: Canvas的基本繪圖
                </Link>
                <Link href="/CanvasImage">
                    下一篇: Canvas的圖片繪製
                </Link>
            </div>
        </Layout>
    )
}

export default CanvasText;