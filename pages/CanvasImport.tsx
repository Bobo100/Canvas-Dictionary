// Canvas的注意事項

import { Head } from "next/document";
import Layout from "../components/layout";

export function CanvasImport() {
    return (
        <Layout>
            <Head>
                <title>Canvas的注意事項</title>
            </Head>
            <div>
                <h1>這裡會給你一些Canvas的注意事項</h1>
                <p>很多人或是我偶爾也會忘記，所以我就把它寫在這裡</p>

                <p>記得要把Canvas的寬高設定好，不然你會看不到你畫的東西</p>
                <p>記得要close path，不然你會看到很奇怪的東西</p>
                
            </div>
        </Layout>
    )
}