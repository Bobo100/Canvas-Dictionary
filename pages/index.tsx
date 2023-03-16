import Head from "next/head";
import Layout from '../components/layout';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from "../styles/index.module.scss"
import { useEffect, useRef } from "react";
import Link from "next/link";


function HomePage() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.fillStyle = 'red'
                context.fillRect(0, 0, 100, 100);
            }
        }
    }, []);

    return (
        <Layout>
            <Head>
                <title>Canvas介紹</title>
            </Head>
            <div>
                <h1>Canvas介紹</h1>
                <p>Canvas是一個HTML元素，它可以讓我們在網頁上繪製圖形(2D)或影像(3D)。並且可以透過JavaScript來控制繪製的內容。</p>
                <p>下面我們將教你如何使用Canvas</p>
                <h2>Canvas的使用</h2>

                <p>首先我們先在HTML中加入一個Canvas元素</p>
                <h3>請注意我們是在React中使用Canvas，而不是在原生的HTML中使用</h3>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`<canvas className="canvas" width="200" height="100"></canvas>`}
                </Prism>

                <p>我特別加上border來讓大家可以看到Canvas的大小</p>
                <div>
                    <canvas width="200" height="100"></canvas>
                </div>

                <p>接著我們要開始在Canvas上繪製圖形，首先我們要先取得Canvas的Context</p>

                <p>在React中，我們可以透過ref來取得Canvas的DOM元素</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`const canvasRef = useRef<HTMLCanvasElement | null>(null);`}
                </Prism>

                <p>當然，我們必須把ref加到Canvas上 (如果你不知道什麼是ref，請參考這篇文章)<a href="https://bobo100.github.io/React-Hook/">這裡可以學習useRef</a></p>


                <Prism language="typescript" style={vscDarkPlus}>
                    {`< canvas ref={canvasRef} className="canvas" width="200" height="100"></canvas>`}
                </Prism>

                <p>到了這裡，我們就可以在useEffect中取得Canvas的Context，並且開始繪製圖形，這裡我們繪製了一個紅色的方塊</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`useEffect(() => {
    if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        if (context) {
            context.fillStyle = 'red'
            context.fillRect(0, 0, 100, 100);
        }
    }
}, []);`}
                </Prism>

                <div>
                    <canvas ref={canvasRef} width="200" height="100"></canvas>
                </div>

                <p>這樣就完成了Canvas的基本使用，接下來我們會介紹Canvas的更多功能，像是如何繪製圓形、線條、文字、圖片等等，以及語法上要注意的地方</p>

                <div className="link_container">
                    <Link href="/CanvasStyles">下一篇：Canvas的基本繪圖功能</Link>
                </div>


            </div>
        </Layout >
    )
}

export default HomePage