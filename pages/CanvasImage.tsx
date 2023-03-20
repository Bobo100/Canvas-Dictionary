import Link from "next/link";
import Layout from "../components/layout";
import { CanvasDrawImage } from "../components/CavnasImage/CanvasDrawImage";
import { CommonPrism } from "../components/Common";

function CanvasImage() {
    return (
        <Layout>
            <div>
                <h1>Canvas的圖片繪製</h1>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage">MDN drawImage</a>
                <p>在上一篇我們介紹了Canvas的文字繪製，接下來我們要介紹Canvas的圖片繪製</p>
                <h2>Canvas的圖片繪製</h2>
                <p>Canvas的圖片繪製跟繪製圖形的方法差不多，只是要多一個drawImage()方法</p>
                <h4>drawImage()參數如下</h4>
                <CommonPrism>
                    {`// image：要繪製的圖片，sx：圖片的x座標，sy：圖片的y座標，sWidth：圖片的寬度，sHeight：圖片的高度，dx：要繪製的x座標，dy：要繪製的y座標，dWidth：要繪製的寬度，dHeight：要繪製的高度
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight) // 多數情況會使用這個`}
                </CommonPrism>
                <p>image：要繪製的圖片，sx：圖片的x座標，sy：圖片的y座標，sWidth：圖片的寬度，sHeight：圖片的高度，dx：要繪製的x座標，dy：要繪製的y座標，dWidth：要繪製的寬度，dHeight：要繪製的高度</p>

                <p>drawImage()方法的參數有點多，但是我們只要知道這些參數的意義就好，不用一定要全部都設定</p>
                <p>像是很多時候我們只是要繪製整張圖片，這時候我們就可以不用設定sx、sy、sWidth、sHeight這四個參數</p>
                <p>而dx、dy、dWidth、dHeight這四個參數就是要繪製的位置及大小
                    。一般來說設定這四個參數就可以了，不過如果要繪製的圖片大小跟Canvas的大小不一樣，就要設定sx、sy、sWidth、sHeight這四個參數</p>

                <h4>我常常這麼寫，可以省略一些參數</h4>
                <CommonPrism>
                    {`// 繪製整張圖片
ctx.drawImage(image, 0, 0);
// 繪製整張圖片，並設定大小
ctx.drawImage(image, 0, 0, 100, 100);
`}
                </CommonPrism>

                <p>接著我們來看一個範例</p>
                <p>在這個範例中，我們畫了兩張圖片，都是整張圖片，但是用不同大小。</p>
                <p>第一張200*200，第二張是50*50</p>
                <CanvasDrawImage />

                <p>這樣你就已經學會如何繪製圖片了</p>
                <p>接下來，我們可以去學習一些進階的Canvas功能，像是Canvas的動畫、Canvas的影像處理等等。像是要如何做Canvas的動畫，我們可以參考<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">MDN Canvas動畫</a></p>
                <p>也可以去搭配事件來做一些互動的功能，像是使用滑鼠實現放大鏡的功能，這個我們可以參考<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas">MDN Canvas像素處理</a></p>
                <p>除了官方教學外，下一篇我們也都會慢慢教你</p>

            </div>
            <div className="link_container">
                <Link href="/CanvasText">
                    上一篇：Canvas的文字繪製
                </Link>
                <Link href="/CanvasImageAdvance">
                    下一篇：Canvas的圖片繪製(進階)
                </Link>
            </div>
        </Layout>
    )
}

export default CanvasImage;