import { useEffect, useRef, useState } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Decimal } from "decimal.js"
import image_show from "../public/images/DCD4EF24-BBCE-4A90-8067-A2A52E04B1BF.jpg";

export function CanvasImageZoomMousePosition({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [scaleSum, setScaleSum] = useState(1);
    const maxScale = 3;
    const minScale = 1;
    // 紀錄滑鼠的位置
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // 第一次載入圖片
    useEffect(() => {
        if (image) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.src = src;
        setImage(img);
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
        // 清除畫布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 將canvas的原點移動到滑鼠的位置
        ctx.translate(mousePosition.x, mousePosition.y);
        // 縮放圖片
        ctx.scale(scaleSum, scaleSum);
        // 移動圖片的原點到滑鼠的位置
        ctx.translate(-mousePosition.x, -mousePosition.y);
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
            <canvas ref={canvasRef} width={200} height={200} />
            <Prism language="typescript" style={vscDarkPlus}>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [image, setImage] = useState<HTMLImageElement | null>(null);
const [scaleSum, setScaleSum] = useState(1);
const maxScale = 3;
const minScale = 1;
// 紀錄滑鼠的位置
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// 第一次載入圖片
useEffect(() => {
    if (image) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    img.src = src;
    setImage(img);
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
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 將canvas的原點移動到滑鼠的位置
    ctx.translate(mousePosition.x, mousePosition.y);
    // 縮放圖片
    ctx.scale(scaleSum, scaleSum);
    // 移動圖片的原點到滑鼠的位置
    ctx.translate(-mousePosition.x, -mousePosition.y);
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