import Link from "next/link";
import Layout from "../components/layout";
import { CanvasFillText } from "../components/CanvasText/CanvasFillText";
import { CommonPrism } from "../components/Common";
import Head from "next/head";

function CanvasText() {
    return (
        <Layout>
            <Head>
                <title>Canvas的文字繪製</title>
            </Head>
            <div>
                <h1>Canvas的文字繪製</h1>
                <p>在上一篇我們介紹了Canvas的基本繪圖功能，接下來我們要介紹Canvas的文字繪製</p>
                <h2>Canvas的文字繪製</h2>
                <p>Canvas的文字繪製跟繪製圖形的方法差不多，只是要多一個fillText()方法</p>
                <h4>fillText()方法有三個參數</h4>
                <CommonPrism>
                    {` // text：要繪製的文字，x：文字的x座標，y：文字的y座標
context.fillText(text, x, y);`}
                </CommonPrism>
                <p>text：要繪製的文字，x：文字的x座標，y：文字的y座標</p>

                <p>而文字的顏色則是由fillStyle來設定</p>
                <CommonPrism>
                    {`context.fillStyle = 'red';`}
                </CommonPrism>
                <p>我們也可以設定文字的字體大小及字型</p>
                <CommonPrism>
                    {`context.font = '30px Arial';`}
                </CommonPrism>

                <p>接著我們來看一個範例</p>
                <p>首先，我們設定了文字的顏色為白色，字體大小為30px，字型為Arial</p>
                <p>然後我們在(0,30)的位置填入文字Hello World，(0,60)的位置填入文字你好</p>
                <CanvasFillText />

            </div>
            <div className="link_container">
                <Link href="/CanvasStyles">
                    上一篇：Canvas的基本繪圖
                </Link>
                <Link href="/CanvasImage">
                    下一篇：Canvas的圖片繪製
                </Link>
            </div>
        </Layout>
    )
}

export default CanvasText;