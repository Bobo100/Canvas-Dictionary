import Link from "next/link";
import Layout from "../components/layout";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CanvasDrawImage } from "../components/CavnasImage/CanvasDrawImage";
import { CanvasImageZoomCenter } from "../components/CanvasImageAdvance/CanvasImageZoomCenter";
import { CanvasImageZoomMousePosition } from "../components/CanvasImageAdvance/CanvasImageZoomMousePosition";
import { CanvasImageZoomMousePosition2 } from "../components/CanvasImageAdvance/CanvasImageZoomMousePosition2";

function CanvasImageAdvance() {
    return (
        <Layout>
            <div>
                <h1>Canvas的圖片繪製(進階版)</h1>
                <p>在上一篇中，我們介紹了Canvas的圖片繪製，但是在實際的開發中，我們會需要更多的功能，像是圖片的縮放、
                    <a href="/CanvasImageAdvance#image_rotate">旋轉</a>
                    、<a href="/CanvasImageAdvance">裁切</a>
                    、<a href="/CanvasImageAdvance">放大鏡</a>
                    等等，這篇就來介紹一下這些功能。</p>
                <h2>圖片的縮放</h2>
                <h3>從圖片的中心點開始縮放(有很多作法，這邊提供一種)</h3>
                <p>概念是這樣的，我們先把圖片的中心點設定成原點，然後再縮放圖片，最後再把原點移回左上角，這樣就可以達到從圖片的中心點開始縮放的效果。</p>
                <CanvasImageZoomCenter src="./images/mountain.jpg" />

                <p>根據滑鼠的位置來縮放圖片</p>
                <CanvasImageZoomMousePosition src="./images/mountain.jpg" />

                <p>我們可以再優化這個效果，當有放大後，再沒有回復到原本大小前，縮小一定是從放大那個的滑鼠位置開始縮小，這樣的效果會比較好。</p>
                <CanvasImageZoomMousePosition2 src="./images/mountain.jpg" />

                <h2 id="image_rotate">圖片的旋轉</h2>
                <p>旋轉圖片的話，我們可以使用<code>context.rotate</code>來處理，這個方法會把圖片旋轉一定的角度，但是這個方法會影響到整個畫布，所以我們需要先把畫布的原點移動到圖片的中心點，然後再旋轉，最後再把原點移回左上角。</p>



                <p>我們可以使用一個套件來幫我們處理這些事情，這個套件叫做<code>konva</code>，這個套件可以幫我們處理很多Canvas的事情，像是圖片的縮放、旋轉、裁切等等</p>


            </div>
            <div className="link_container">
                <Link href="/CanvasImage">
                    上一篇：Canvas的圖片繪製
                </Link>
                <Link href="/CanvasImport">
                    下一篇：Canvas的注意事項
                </Link>
            </div>
        </Layout>
    )
}

export default CanvasImageAdvance;