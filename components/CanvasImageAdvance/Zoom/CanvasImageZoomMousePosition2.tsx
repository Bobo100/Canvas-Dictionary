import { useEffect, useRef, useState } from "react";
import { Decimal } from "decimal.js"
import { CommonPrism } from "../../Common";

export function CanvasImageZoomMousePosition2({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [scaleFactor, setScaleFactor] = useState(1);
    const maxScaleFactor = 3;
    const minScaleFactor = 1;
    // 紀錄滑鼠的位置
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // 紀錄最後的放大滑鼠位置
    const [specialMousePosition, setSpecialMousePosition] = useState({ x: 0, y: 0 });

    // 第一次載入圖片
    useEffect(() => {
        const img = new Image();
        img.src = src;
        // 當圖片載入完成後，才把圖片設定到state
        img.onload = () => {
            setImage(img);
        }
    }, [src]);

    useEffect(() => {
        if (!image) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // 把canvas的大小設定成圖片的大小
        canvas.width = image.width;
        canvas.height = image.height;
        const rect = canvas.getBoundingClientRect();
        const mouse_canvas_x = mousePosition.x * image.width / rect.width;
        const mouse_canvas_y = mousePosition.y * image.height / rect.height;
        // 清除畫布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 將canvas的原點移動到滑鼠的位置
        ctx.translate(mouse_canvas_x, mouse_canvas_y);
        // 縮放圖片
        ctx.scale(scaleFactor, scaleFactor);
        // 移動圖片的原點到滑鼠的位置
        ctx.translate(-mouse_canvas_x, -mouse_canvas_y);
        // 繪製圖片
        ctx.drawImage(image, 0, 0);

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const delta = -Math.sign(e.deltaY);
            let newScaleFactor = scaleFactor;
            if ((scaleFactor < maxScaleFactor && delta > 0) || (scaleFactor > minScaleFactor && delta < 0)) {
                newScaleFactor = new Decimal(scaleFactor).plus(delta * 0.1).toNumber();
            }
            if (newScaleFactor !== scaleFactor) {
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // 紀錄最後的放大滑鼠位置
                if (delta > 0) {
                    setSpecialMousePosition({ x: x, y: y });
                    // 如果是正在縮小，且還沒有回到原本的大小，就使用最後的放大位置去縮小
                } else if (delta < 0 && newScaleFactor !== 1) {
                    setMousePosition({ x: specialMousePosition.x, y: specialMousePosition.y });
                } else {
                    setMousePosition({ x: x, y: y });
                }
                setScaleFactor(newScaleFactor);
            }
        }
        canvas.addEventListener('wheel', handleWheel);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('wheel', handleWheel);
            canvas.removeEventListener('mousemove', handleMouseMove);
        }

    }, [image, scaleFactor]);

    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
            <CommonPrism>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [image, setImage] = useState<HTMLImageElement | null>(null);
const [scaleFactor, setScaleFactor] = useState(1);
const maxScaleFactor = 3;
const minScaleFactor = 1;
// 紀錄滑鼠的位置
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// 紀錄最後的放大滑鼠位置
const [specialMousePosition, setSpecialMousePosition] = useState({ x: 0, y: 0 });

// 第一次載入圖片
useEffect(() => {    
    const img = new Image();
    img.src = src;
    // 當圖片載入完成後，才把圖片設定到state
    img.onload = () => {
        setImage(img);
    }
}, [src]);

useEffect(() => {
    if (!image) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // 把canvas的大小設定成圖片的大小
    canvas.width = image.width;
    canvas.height = image.height;
    const rect = canvas.getBoundingClientRect();
    const mouse_canvas_x = mousePosition.x * image.width / rect.width;
    const mouse_canvas_y = mousePosition.y * image.height / rect.height;
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 將canvas的原點移動到滑鼠的位置
    ctx.translate(mouse_canvas_x, mouse_canvas_y);
    // 縮放圖片
    ctx.scale(scaleFactor, scaleFactor);
    // 移動圖片的原點到滑鼠的位置
    ctx.translate(-mouse_canvas_x, -mouse_canvas_y);
    // 繪製圖片
    ctx.drawImage(image, 0, 0);

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = -Math.sign(e.deltaY);
        let newScaleFactor = scaleFactor;
        if ((scaleFactor < maxScaleFactor && delta > 0) || (scaleFactor > minScaleFactor && delta < 0)) {
            newScaleFactor = new Decimal(scaleFactor).plus(delta * 0.1).toNumber();
        }
        if (newScaleFactor !== scaleFactor) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // 紀錄最後的放大滑鼠位置
            if (delta > 0) {
                setSpecialMousePosition({ x: x, y: y });
                // 如果是正在縮小，且還沒有回到原本的大小，就使用最後的放大位置去縮小
            } else if (delta < 0 && newScaleFactor !== 1) {
                setMousePosition({ x: specialMousePosition.x, y: specialMousePosition.y });
            } else {
                setMousePosition({ x: x, y: y });
            }
            setScaleFactor(newScaleFactor);
        }
    }
    canvas.addEventListener('wheel', handleWheel);

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    }
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
        canvas.removeEventListener('wheel', handleWheel);
        canvas.removeEventListener('mousemove', handleMouseMove);
    }

}, [image, scaleFactor]);`}
            </CommonPrism>
        </div>
    )
}