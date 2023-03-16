import Link from "next/link";
import Layout from "../components/layout";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CanvasLine } from "../components/CanvasStyles/CanvasLine";
import { CanvasLine2 } from "../components/CanvasStyles/CanvasLine2";
import { CanvasCurveArc } from "../components/CanvasStyles/CanvasCurveArc";
import { CanvasCircleArc } from "../components/CanvasStyles/CanvasCircle";
import { CanvasCurveArcTo } from "../components/CanvasStyles/CanvasCurveArcTo";
import { CanvasCircleFill } from "../components/CanvasStyles/CanvasCircleFill";
import { CanvasCircleFill2 } from "../components/CanvasStyles/CanvasCircleFill2";
import { CanvasRect } from "../components/CanvasStyles/CanvasRect";
import { CanvasFillRect } from "../components/CanvasStyles/CanvasFillRect";

export function CanvasStyles() {
    return (
        <Layout>
            <div>
                <h1>Canvas的基本繪圖功能</h1>
                <p>在上一篇我們介紹了Canvas的基本使用，接下來我們要介紹Canvas的基本繪圖功能</p>
                <h2>Canvas的基本繪圖功能</h2>

                <h3>首先我們要來認識語法</h3>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.beginPath(); // 開始繪製
context.closePath(); // 結束繪製
context.fill(); // 填滿
context.stroke(); // 繪製線條
...還有非常多
`}
                </Prism>

                <p>Canvas繪製圖形的一切都要從beginPath()開始，而結束則是要呼叫closePath()，而fill()則是用來填滿圖形，而stroke()則是用來繪製線條</p>

                <h3>接著，可以了解一些屬性</h3>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.fillStyle = 'red'; // 填滿的顏色
context.strokeStyle = 'red'; // 線條的顏色
context.lineWidth = 5; // 線條的寬度
...還有非常多
`}
                </Prism>

                <p>fillStyle是用來設定填滿的顏色，而strokeStyle是用來設定線條的顏色，而lineWidth是用來設定線條的寬度</p>

                <h3>最後，可以了解一些方法</h3>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.moveTo(x, y); // 移動到(x, y)的位置
context.lineTo(x, y); // 繪製一條線到(x, y)的位置
context.arc(x, y, radius, startAngle, endAngle, anticlockwise); // 繪製圓形
context.arcTo(x1, y1, x2, y2, radius); // 繪製圓弧
...還有非常多
`}
                </Prism>

                <p>只需要記得一個順序</p>
                <ol>
                    <li>beginPath()</li>
                    <li>設定屬性，像是顏色、寬度等等</li>
                    <li>設定方法，像是繪製線條、繪製圓形等等</li>
                    <li>決定是要填滿還是繪製線條</li>
                    <li>closePath()</li>
                </ol>

                <p>看起來還是很複雜，但是我們會在下面的範例中，一一介紹</p>
                <p>Canvas的基本繪圖功能包含了繪製圓形、線條、文字、圖片等等，又或是繪製的位置、大小、顏色等等</p>
                <p>我們先從線條開始</p>

                <h3>繪製線條</h3>
                <p>Canvas提供了兩個方法來繪製線條，分別是moveTo()和lineTo()</p>

                <p>moveTo()方法是用來移動畫筆的位置，而lineTo()方法是用來繪製線條</p>
                <p>moveTo()方法的參數如下</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.moveTo(x, y); // 移動到(x, y)的位置
`}
                </Prism>

                <p>lineTo()方法的參數如下</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.lineTo(x, y); // 繪製一條線到(x, y)的位置
`}
                </Prism>

                <p>我們來看一個範例，程式碼如下</p>
                <CanvasLine />
                <p>凡事都從beginPath()開始，接著我們設定線條的顏色為紅色，然後我們移動畫筆到(100, 100)的位置，接著我們繪製一條線到(200, 200)的位置，最後我們呼叫stroke()來繪製線條</p>

                <p>我們可以接著畫嗎?當然可以！！！</p>
                <p>下面，我們就將線條再從(100, 100)到(200, 50)的位置畫出來</p>
                <CanvasLine2 />

                <h3>繪製方形</h3>
                <p>Canvas提供了兩個方法來繪製方形，分別是rect()和fillRect()</p>
                <p>rect()方法是用來繪製方形的邊框，而fillRect()方法是用來繪製方形的內容</p>
                <p>rect()方法的參數如下</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.rect(x, y, width, height); // 繪製一個(x, y)為左上角，寬為width，高為height的方形
`}
                </Prism>
                <p>x是方形左上角的x座標，y是方形左上角的y座標，width是方形的寬度，height是方形的高度</p>
                <p>我們可以看範例來了解</p>
                <CanvasRect />

                <p>fillRect()方法的參數如下</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.fillRect(x, y, width, height); // 繪製一個(x, y)為左上角，寬為width，高為height的方形
`}
                </Prism>

                <p>我們來看一個範例，程式碼如下</p>
                <CanvasFillRect />

                <p>雖然我們說rect()方法是用來繪製方形的邊框，但是我們還是可以透過fill()來填滿方形的內容</p>

                <h3>繪製圓弧</h3>
                <p>Canvas提供了兩個方法來繪製圓弧，分別是arc()和arcTo()</p>
                <p>arc() 和 arcTo() 都能夠畫圓弧，但是在不同的情況下使用，得到的結果會有所不同。</p>
                <p>arc(): 用於從當前點開始繪制一個圓弧。它需要指定圓心座標、半徑、開始角度和結束角度。可以通過結束角度減去開始角度來繪製完整圓形。此方法更加靈活，可以畫出多種類型的圓弧。</p>
                <p>arcTo(): 用於繪製兩個切線之間的弧。它需要指定起始點、夾角和終點。如果轉換角度趨近 0 或 180 度，則繪製出來的效果會趨近於直線。由於其限制性較大，在某些情況下可能無法繪製完美的圓形。</p>

                <p>arc()方法的參數如下</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.arc(x, y, radius, startAngle, endAngle, anticlockwise);`}
                </Prism>
                <p>其中，x和y是圓心的座標，radius是圓的半徑，startAngle和endAngle是圓弧的起始角度和結束角度，anticlockwise是一個布林值，如果為true，則圓弧會從結束角度到起始角度繪製，反之則從起始角度到結束角度繪製</p>
                <p>我們來看一個圓弧的範例，使用arc()</p>
                <CanvasCurveArc />

                <p>arcTo()方法的參數如下</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`context.arcTo(x1, y1, x2, y2, radius);`}
                </Prism>
                <p>其中，x1和y1是圓弧的起始點，x2和y2是圓弧的結束點，radius是圓弧的半徑</p>

                <p>我們來看一個範例</p>
                <CanvasCurveArcTo />

                <h3>繪製圓形</h3>
                <p>我們也可以用arc()方法來畫出這個圖形</p>
                <p>我們來看一個範例</p>
                <CanvasCircleArc />

                <p>到這裡，你會發現我們都是以線條來畫圖形，但是我們也可以用fill()方法來填滿圖形</p>
                <p>我們來看一個範例</p>
                <CanvasCircleFill />

                <p>我們也可以把線條和填滿的圖形結合起來</p>
                <p>我們來看一個範例</p>
                <CanvasCircleFill2 />

                <p>到目前為止，你就能夠繪製出各種圖形了</p>


            </div>

            <div className="link_container">
                <Link href="/">回到上一頁</Link>
                <Link href="/CanvasImport">你可能會犯的錯</Link>
            </div>
        </Layout>
    )
}

export default CanvasStyles;