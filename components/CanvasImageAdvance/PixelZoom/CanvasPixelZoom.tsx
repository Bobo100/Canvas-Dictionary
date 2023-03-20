import React, { useRef, useEffect, useState } from "react";

interface Props {
    src: string;
}

const CanvasZoom: React.FC<Props> = ({ src }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const smoothedZoomRef = useRef<HTMLCanvasElement>(null);
    const pixelatedZoomRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImage(img);
        }
    }, [src]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        if (!image) return;
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const smoothedZoomCtx = smoothedZoomRef.current!.getContext("2d")!;
        smoothedZoomCtx.imageSmoothingEnabled = true;
        // smoothedZoomCtx.mozImageSmoothingEnabled = true;
        // smoothedZoomCtx.webkitImageSmoothingEnabled = true;
        // smoothedZoomCtx.msImageSmoothingEnabled = true;

        const pixelatedZoomCtx = pixelatedZoomRef.current!.getContext("2d")!;
        pixelatedZoomCtx.imageSmoothingEnabled = false;
        // pixelatedZoomCtx.mozImageSmoothingEnabled = false;
        // pixelatedZoomCtx.webkitImageSmoothingEnabled = false;
        // pixelatedZoomCtx.msImageSmoothingEnabled = false;

        const zoom = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
            ctx.drawImage(
                canvas,
                Math.min(Math.max(0, x - 5), image.width - 10),
                Math.min(Math.max(0, y - 5), image.height - 10),
                10,
                10,
                0,
                0,
                200,
                200
            );
        };

        canvas.addEventListener("mousemove", (event) => {
            const x = event.offsetX;
            const y = event.offsetY;
            zoom(smoothedZoomCtx, x, y);
            zoom(pixelatedZoomCtx, x, y);
        });
    }, [image]);

    return (
        <div>
            <canvas ref={canvasRef} className="canvas"/>
            <canvas ref={smoothedZoomRef} width={200} height={200} />
            <canvas ref={pixelatedZoomRef} width={200} height={200} />
        </div>
    );
};

export default CanvasZoom;
