import Link from "next/link";
import Layout from "../components/layout";
import { CanvasImageZoomCenter } from "../components/CanvasImageAdvance/Zoom/CanvasImageZoomCenter";
import { CanvasImageZoomMousePosition } from "../components/CanvasImageAdvance/Zoom/CanvasImageZoomMousePosition";
import { CanvasImageZoomMousePosition2 } from "../components/CanvasImageAdvance/Zoom/CanvasImageZoomMousePosition2";
import CanvasImageRotate from "../components/CanvasImageAdvance/Rotate/CanvasImageRotate";
import { CommonPrism } from "../components/Common";import CanvasImageClip from "../components/CanvasImageAdvance/Clip/CanvasImageClip";
import CanvasZoom from "../components/CanvasImageAdvance/PixelZoom/CanvasPixelZoom";
import { CommonPrism } from "../components/Common";

function CanvasImageAdvance() {
    return (
        <Layout>
            <div>
                <h1>Canvas的圖片繪製(進階版)</h1>
                <p>在上一篇中，我們介紹了Canvas的圖片繪製，但是在實際的開發中，我們會需要更多的功能，像是圖片的縮放、
                    <a href="/CanvasImageAdvance#image_rotate">旋轉</a>
                    、<a href="/CanvasImageAdvance#image_clip">裁切</a>
                    、<a href="/CanvasImageAdvance">放大鏡</a>
                    等等，下面馬上就來介紹一下這些功能。</p>
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
                <p>另外，我們需要先學習一下<code>save()</code>與<code>restore()</code>的用法，這兩個方法可以用來儲存與還原畫布的狀態，這樣就可以避免影響到其他的繪製。</p>

                <p>下面，我們會示範有使用<code>save()</code>與<code>restore()</code>的用法，以及沒有使用的用法，這樣可以快速知道差別。</p>

                <h3>有使用和沒使用的差別</h3>
                <CanvasImageRotate src="./images/mountain.jpg" />

                <h2>save()和restore()的介紹</h2>

                <a href="https://juejin.cn/post/6844903879599996942">圖解版本</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save">MDN的save()與restore()的介紹</a>
                <p>save方法會保存當前的狀態，restore方法會還原到最近一次save的狀態，這樣就可以避免影響到其他的繪製。</p>

                <p>什麼意思呢?</p>
                <p>以rotate為例子，當我們旋轉一個圖片後，canvas的x軸與y軸會一起旋轉。為了避免影響到其他的繪製，我們可以使用save()來儲存當前的狀態，然後再使用restore()來還原到最近一次save的狀態。</p>
                <p>在store和restore之間的繪製，都會受到影響，但是在store和restore之外的繪製，不會受到影響。</p>

                <p>以我們上面的例子來說：我們tranlate到canvas的中心點，然後再rotate，接著畫上我們的圖片。接著我們使用restore()來還原到最近一次save的狀態。</p>

                <p>下面再用一個簡單的例子：</p>
                <CommonPrism>
                    {`// 保存當前狀態
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// 回復狀態
ctx.restore();
// 所以這個會變回黑色的 (因為我們的綠色是在save和restore之間的)
ctx.fillRect(150, 40, 100, 100);`}
                </CommonPrism>

                <h2 id="image_clip">圖片的裁切</h2>
                <p>我們可以繪製任意的形狀，然後再使用<code>clip</code>來裁切圖片。下面我們會示範一個圓形的裁切。</p>
                <CanvasImageClip src="./images/mountain.jpg" />


                <h2>放大鏡 PixelZoom (官方版本)</h2>
                <CanvasZoom src="./images/mountain.jpg" />


                {/* <p>我們可以使用<code>globalCompositeOperation</code>來處理這個問題，這個屬性可以讓我們決定當兩個圖層重疊時，要如何處理。</p>
                <p>下面我們會示範一個放大鏡的效果，這個效果是使用<code>globalCompositeOperation</code>來處理的。</p> */}


                <h2>使用其他套件來幫忙~</h2>
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