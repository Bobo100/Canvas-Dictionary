// // 圖片旋轉?
// import { useEffect, useRef, useState } from "react";
// import { Decimal } from "decimal.js"
// import { CommonPrism } from "../../Common";
// import Image from "next/image";

// export default function CanvasDragInto() {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const [image, setImage] = useState<HTMLImageElement | null>(null);
//     const [startX, setStartX] = useState(0);
//     const [startY, setStartY] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);

//     return (
//         <div>
//             <canvas
//                 ref={canvasRef}
//                 width={300}
//                 height={300}
//                 onDragOver={(event) => event.preventDefault()}
//                 onDrop={(event) => {
//                     event.preventDefault();
//                     if (!image) return;

//                     const x = event.clientX - canvasRef.current!.offsetLeft - startX;
//                     const y = event.clientY - canvasRef.current!.offsetTop - startY;
//                     const width = image.width;
//                     const height = image.height;

//                     const context = canvasRef.current!.getContext('2d');
//                     context?.drawImage(image, x, y, width, height);
//                 }}
//             />
//             <Image
//                 draggable
//                 src="/images/mountain.jpg"
//                 width={50}
//                 height={50}
//                 alt=""
//                 onDragStart={(event) => {
//                     event.preventDefault();
//                     const startX = event.clientX - (event.target as HTMLImageElement).offsetLeft;
//                     const startY = event.clientY - (event.target as HTMLImageElement).offsetTop;
//                     setIsDragging(true);
//                     setStartX(startX);
//                     setStartY(startY);

//                     setImage(event.target as HTMLImageElement);
//                 }}
//                 onDragEnd={(event) => {
//                     event.preventDefault();
//                     console.log("end")
//                     setIsDragging(false);
//                 }}
//             />
//         </div>
//     )
// }


import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function CanvasDragInto() {
    const [isDragging, setIsDragging] = useState(false);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current || !image || !isDragging) return;

        const context = canvasRef.current.getContext("2d");
        const { x, y } = startCoords;
        const width = image.width;
        const height = image.height;

        context?.drawImage(image, x, y, width, height);
    }, [isDragging]);

    function handleDragStart(event: React.DragEvent<HTMLImageElement>) {
        const startX = event.clientX - event.currentTarget.offsetLeft;
        const startY = event.clientY - event.currentTarget.offsetTop;
        setIsDragging(true);
        setStartCoords({ x: startX, y: startY });
        setImage(event.currentTarget);
    }

    function handleDragEnd(event: React.DragEvent<HTMLImageElement>) {
        setIsDragging(false);
        setImage(null);
    }

    function handleDragOver(event: React.DragEvent<HTMLCanvasElement>) {
        event.preventDefault();
    }

    function handleDrop(event: React.DragEvent<HTMLCanvasElement>) {
        event.preventDefault();
        if (!image) return;

        // 圖片的位置 = 滑鼠在瀏覽器的位置 - canvas的位置 - 一開始抓取的滑鼠在圖片的位置
        const x = event.clientX - canvasRef.current!.offsetLeft - startCoords.x;
        const y = event.clientY - canvasRef.current!.offsetTop - startCoords.y;
        const width = image.width;
        const height = image.height;

        const context = canvasRef.current!.getContext("2d");
        context?.drawImage(image, x, y, width, height);
    }

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={300}
                height={300}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            />
            {/* <img
                draggable
                src="/images/mountain.jpg"
                width={50}
                height={50}
                alt=""
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            /> */}
            <Image src="/images/mountain.jpg" width={50} height={50} alt=""
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            />
        </div>
    );
}
