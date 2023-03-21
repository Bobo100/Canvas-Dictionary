import Head from "next/head";
import CanvasAnimationFrame from "../components/CanvasAnimation/CanvasAnimationFrame";
import CanvasAnimationFrame2 from "../components/CanvasAnimation/CanvasAnimationFrame2";
import Layout from "../components/layout";

function CanvasAnimation() {
    return (
        <Layout>
            <Head>
                <title>Canvas的動畫繪製</title>
            </Head>
            <h1>CanvasAnimation</h1>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">MDN Basic animations</a>

            <p>動畫的實現主要有兩種方式，一種是使用setTimeout()或setInterval()來實現，另一種是使用requestAnimationFrame()來實現</p>
            <p>使用setTimeout()或setInterval()來實現動畫的缺點是，當瀏覽器的頁面不在當前的頁面時，setTimeout()或setInterval()會暫停執行，這樣會導致動畫的停止</p>
            <p>而使用requestAnimationFrame()來實現動畫的好處是，當瀏覽器的頁面不在當前的頁面時，requestAnimationFrame()會自動暫停執行，當瀏覽器的頁面回到當前的頁面時，requestAnimationFrame()會自動繼續執行，這樣就不會導致動畫的停止</p>

            <p>兩邊的一些其他差異如下：</p>
            <ul>
                <li>setTimeout() 或 setInterval() 實現的動畫是按照時間間隔來更新畫面的，因此在不同的裝置上可能表現不一樣。</li>
                <li>requestAnimationFrame() 則會根據每個顯示器的垂直同步信號 (v-sync) 來更新畫面，在大多數情況下能夠達到更好的效果</li>
            </ul>

            <h4>requestAnimationFrame()的使用方式如下：</h4>
            <ul>
                <li>在瀏覽器的下一次重繪之前，要求瀏覽器執行特定的動畫函數</li>
                <li>瀏覽器會在下一次重繪之前，執行這個動畫函數</li>
                <li>動畫函數會在瀏覽器的下一次重繪之前執行</li>
            </ul>

            <p className="hightlight">requestAnimationFrame 不是自動每秒觸發的，而是在瀏覽器畫面更新之前，對回調函數進行一次調用。它通常為約每秒 60 次左右，但實際上執行次數根據瀏覽器效能和設備性能等因素而異。值得注意的是，由於 requestAnimationFrame 的特點，如果畫面不更新，它就不會觸發回調函數，這可以幫助節省 CPU 使用率和電池壽命。</p>

            <p>下面是一個使用requestAnimationFrame()來實現動畫的範例</p>
            <CanvasAnimationFrame />

            <h2>更多的範例</h2>
            <p>我們也可以用圖片來做動畫，下面為範例</p>


            <p>當然，前面有說setTimeout()或setInterval()也可以實現動畫。</p>
            <p>下面是一個使用setTimeout()來實現動畫的範例</p>

            
            <p>下面是一個使用setInterval()來實現動畫的範例</p>

        </Layout>
    )
}

export default CanvasAnimation;