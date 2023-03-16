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
        // 開始繪製
        ctx.beginPath();
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
            <canvas ref={canvasRef} width={200} height={200} />
            <Prism language="typescript" style={vscDarkPlus}>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [image, setImage] = useState<HTMLImageElement | null>(null);
const [scaleSum, setScaleSum] = useState(1);
const maxScale = 3;
const minScale = 1;
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
    // 開始繪製
    ctx.beginPath();
    // 設定圖片的中心點
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // 移動canvas的原點到圖片的中心點
    ctx.translate(centerX, centerY);
    // 縮放圖片
    ctx.scale(scaleSum, scaleSum);
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