import Link from "next/link"
import { useRouter } from "next/router"

const RouterLink = () => {
    const router = useRouter()
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/CanvasStyles" className={router.pathname === "/CanvasStyles" ? "active" : ""}>01 基本繪圖功能</Link>
            <Link href="/CanvasText" className={router.pathname === "/CanvasText" ? "active" : ""}>02 文字繪製</Link>
            <Link href="/CanvasImage" className={router.pathname === "/CanvasImage" ? "active" : ""}>03 圖片繪製</Link>
            <Link href="/CanvasImageAdvance" className={router.pathname === "/CanvasImageAdvance" ? "active" : ""}>04 圖片繪製(進階)</Link>
            <Link href="/CanvasAnimation" className={router.pathname === "/CanvasAnimation" ? "active" : ""}>05 動畫繪製</Link>
            <Link href="/CanvasImport" className={router.pathname === "/CanvasImport" ? "active" : ""}>06 注意事項</Link>
        </>
    )
}

export default RouterLink