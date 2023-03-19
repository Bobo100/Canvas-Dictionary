import { useEffect, useRef, useState } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Decimal } from "decimal.js"

export function CanvasImageZoomMousePosition2({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [scaleSum, setScaleSum] = useState(1);
    const maxScale = 3;
    const minScale = 1;
    // 紀錄滑鼠的位置
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // 紀錄最後的放大滑鼠位置
    const [specialMousePosition, setSpecialMousePosition] = useState({ x: 0, y: 0 });

    // 第一次載入圖片
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

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
        ctx.scale(scaleSum, scaleSum);
        // 移動圖片的原點到滑鼠的位置
        ctx.translate(-mouse_canvas_x, -mouse_canvas_y);
        // 繪製圖片
        ctx.drawImage(image, 0, 0);

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const delta = -Math.sign(e.deltaY);
            let newScaleFactor = scaleSum;
            if ((scaleSum < maxScale && delta > 0) || (scaleSum > minScale && delta < 0)) {
                newScaleFactor = new Decimal(scaleSum).plus(delta * 0.1).toNumber();
            }
            if (newScaleFactor !== scaleSum) {
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
                setScaleSum(newScaleFactor);
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

    }, [image, scaleSum]);

    return (
        <div>
            <canvas ref={canvasRef} />
            <Prism language="typescript" style={vscDarkPlus}>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [image, setImage] = useState<HTMLImageElement | null>(null);
const [scaleSum, setScaleSum] = useState(1);
const maxScale = 3;
const minScale = 1;
// 紀錄滑鼠的位置
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// 紀錄最後的放大滑鼠位置
const [specialMousePosition, setSpecialMousePosition] = useState({ x: 0, y: 0 });

// 第一次載入圖片
useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
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
    ctx.scale(scaleSum, scaleSum);
    // 移動圖片的原點到滑鼠的位置
    ctx.translate(-mouse_canvas_x, -mouse_canvas_y);
    // 繪製圖片
    ctx.drawImage(image, 0, 0);

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = -Math.sign(e.deltaY);
        let newScaleFactor = scaleSum;
        if ((scaleSum < maxScale && delta > 0) || (scaleSum > minScale && delta < 0)) {
            newScaleFactor = new Decimal(scaleSum).plus(delta * 0.1).toNumber();
        }
        if (newScaleFactor !== scaleSum) {
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
            setScaleSum(newScaleFactor);
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

}, [image, scaleSum]);`}
            </Prism>
        </div>
    )
}