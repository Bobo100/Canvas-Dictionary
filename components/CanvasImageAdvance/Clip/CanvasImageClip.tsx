// 圖片裁切
import { useEffect, useRef, useState } from "react";
import { CommonPrism } from "../../Common";

export default function CanvasImageClip({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImage(img);
        }
    }, [src]);

    useEffect(() => {
        if (!image) return;
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 300, 300); // 清除畫布
                context.save();
                context.arc(250, 200, 20, 0, 2 * Math.PI);
                context.arc(150, 150, 100, 0, 2 * Math.PI); // 畫圓
                context.clip(); // 裁切 會把之前畫的圖形當作遮罩
                context.drawImage(image, 0, 0, 300, 300); // 畫圖
                context.restore();

                // 我們還使用了上面學過的 save() 和 restore() 方法
                // 這兩個方法可以讓我們在畫布上保存當前的狀態，並在之後還原到之前的狀態。
                // 讓我們可以就算裁切後，還可以繼續在畫布上畫圖。 
                // 如果你不使用save 和 restore，那麼畫布上的圖形就會被裁切掉。(只會剩下那兩個arc的範圍能夠填滿顏色或圖片)
                context.beginPath();
                context.fillStyle = "red";
                context.arc(280, 280, 10, 0, 2 * Math.PI); // 畫圓
                context.fill(); // 填滿
            }
        }
    }, [image]);

    return (
        <div>
            <canvas ref={canvasRef} width={300} height={300} />
            <CommonPrism>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [image, setImage] = useState<HTMLImageElement | null>(null);

useEffect(() => {
    const img = new Image();
    // 當圖片載入完成後，才把圖片設定到state
    img.onload = () => {
        setImage(img);
    }
    img.src = src;
}, [src]);

useEffect(() => {
    if (!image) return;
    if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        if (context) {
            context.clearRect(0, 0, 300, 300); // 清除畫布
            context.save();
            context.arc(250, 200, 20, 0, 2 * Math.PI);
            context.arc(150, 150, 100, 0, 2 * Math.PI); // 畫圓
            context.clip(); // 裁切 會把之前畫的圖形當作遮罩
            context.drawImage(image, 0, 0, 300, 300); // 畫圖
            context.restore();

            // 我們還使用了上面學過的 save() 和 restore() 方法
            // 這兩個方法可以讓我們在畫布上保存當前的狀態，並在之後還原到之前的狀態。
            // 讓我們可以就算裁切後，還可以繼續在畫布上畫圖。 
            // 如果你不使用save 和 restore，那麼畫布上的圖形就會被裁切掉。(只會剩下那兩個arc的範圍能夠填滿顏色或圖片)
            context.beginPath();
            context.fillStyle = "red";
            context.arc(280, 280, 10, 0, 2 * Math.PI); // 畫圓
            context.fill(); // 填滿
        }
    }
}, [image]);`}
            </CommonPrism>
        </div>
    )
}
