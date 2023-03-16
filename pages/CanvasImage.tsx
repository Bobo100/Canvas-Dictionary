import Link from "next/link";
import Layout from "../components/layout";

function CanvasImage() {
    return (
        <Layout>
            <div>
                <h1>Canvas的圖片繪製</h1>
                <p>在上一篇我們介紹了Canvas的文字繪製，接下來我們要介紹Canvas的圖片繪製</p>
                <h2>Canvas的圖片繪製</h2>
                <p>Canvas的圖片繪製跟繪製圖形的方法差不多，只是要多一個drawImage()方法</p>
                <p>drawImage()方法有三個參數，第一個是要繪製的圖片，第二個是圖片的x座標，第三個是圖片的y座標</p>
                <p>而圖片的大小則是由width和height來設定</p>
                <p>接著我們來看一個範例</p>
                <p>首先我們要先設定圖片的大小</p>
                <p>然後我們要呼叫drawImage()方法</p>
                <p>最後我們要呼叫fill()方法</p>
                <p>這樣我們就可以在Canvas上繪製圖片了</p>
            </div>
            <div className="link_container">
                <Link href="/CanvasText">
                    上一篇: Canvas的文字繪製
                </Link>
                <Link href="/CanvasImport">
                    下一篇: Canvas注意事項
                </Link>
            </div>
        </Layout>
    )
}

export default CanvasImage;