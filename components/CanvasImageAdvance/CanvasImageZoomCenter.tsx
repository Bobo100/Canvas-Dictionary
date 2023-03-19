// 從圖片的中心點開始縮放
import { useEffect, useRef, useState } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Decimal } from "decimal.js"

export function CanvasImageZoomCenter({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [scaleSum, setScaleSum] = useState(1);
    const maxScale = 3;
    const minScale = 1;

    // 第一次載入圖片
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.onload = () => {
            setImage(img);
        }
        // 因為圖片載入是非同步的，所以要等圖片載入完才能將src 設定給 img
        img.src = src;
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
        // 設定圖片的中心點
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        // 移動canvas的原點到圖片的中心點
        ctx.translate(centerX, centerY);
        // 縮放canvas
        ctx.scale(scaleSum, scaleSum);
        // 縮放過後 canvas的原點會移動，所以要再移動回來
        // 當初移動多少，縮放後就要移動多少
        // 移動canvas的原點回到左上角
        ctx.translate(-centerX, -centerY);
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

        return () => {
            canvas.removeEventListener('wheel', handleWheel);
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

// 第一次載入圖片
useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
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
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 設定圖片的中心點
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // 移動canvas的原點到圖片的中心點
    ctx.translate(centerX, centerY);
    // 縮放canvas
    ctx.scale(scaleSum, scaleSum);
    // 縮放過後 canvas的原點會移動，所以要再移動回來
    // 當初移動多少，縮放後就要移動多少
    // 移動canvas的原點回到左上角
    ctx.translate(-centerX, -centerY);
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
    return () => {
        canvas.removeEventListener('wheel', handleWheel);
    }
}, [image, scaleSum]);`}
            </Prism>
        </div>
    )
}