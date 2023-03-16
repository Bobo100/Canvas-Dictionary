import { useEffect, useRef, useState } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Decimal } from "decimal.js"
import image_show from "../public/images/DCD4EF24-BBCE-4A90-8067-A2A52E04B1BF.jpg";

export function CanvasImageZoomMousePosition2({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [scaleSum, setScaleSum] = useState(1);
    const maxScale = 3;
    const minScale = 1;
    // 紀錄滑鼠的位置
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // 紀錄特殊的滑鼠位置
    const [specialMousePosition, setSpecialMousePosition] = useState({ x: 0, y: 0 })
    // 紀錄現在是要放大還是縮小
    const [isZoomIn, setIsZoomIn] = useState(true);

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

        // 如果是縮小，且scaleSum還不是1，就要把滑鼠的位置設定成特殊的位置，就從特殊的位置開始縮小
        if (!isZoomIn && scaleSum !== 1) {
            // 將canvas的原點移動到特殊的位置
            ctx.translate(specialMousePosition.x, specialMousePosition.y);
            // 縮放圖片
            ctx.scale(scaleSum, scaleSum);
            // 移動圖片的原點到特殊的位置
            ctx.translate(-specialMousePosition.x, -specialMousePosition.y);
            // 繪製圖片
            ctx.drawImage(image, 0, 0);
            return;
        }

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

            if (delta > 0) {
                setIsZoomIn(true);
            } else {
                setIsZoomIn(false);
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

            if (scaleSum != 1) {
                setSpecialMousePosition({ x: 0, y: 0 });
            }
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