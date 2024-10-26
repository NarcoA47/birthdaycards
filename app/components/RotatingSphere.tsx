import { useEffect, useState } from "react";

const images = [
  "/assets/1.jpg", // Left face
  "/assets/2.jpg", // Right face
  "/assets/3.jpg", // Top face
  "/assets/4.jpg", // Bottom face
  "/assets/5.jpg", // Front face
  "/assets/6.jpg", // Back face
  "/assets/7.jpg", // Top-Left face
  "/assets/8.jpg", // Top-Right face
  "/assets/9.jpg", // Top-Front face
  "/assets/10.jpg", // Top-Back face
  "/assets/11.jpg", // Bottom-Left face
  "/assets/7.jpg", // Bottom-Right face
  "/assets/1.jpg", // Bottom-Front face
  "/assets/2.jpg", // Bottom-Back face
  "/assets/3.jpg", // Additional face 1
  "/assets/4.jpg", // Additional face 2
  "/assets/5.jpg", // Additional face 3
  "/assets/6.jpg", // Additional face 4
];

const RotatingSphere: React.FC = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const radius = 150; // Radius of the sphere
  const faceSize = 130; // Increased size of each face

  const handleMouseMove = (e: MouseEvent) => {
    setRotationY((prevY) => prevY + e.movementX * 0.5);
    setRotationX((prevX) => prevX - e.movementY * 0.5);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    setRotationY((prevY) => prevY + touch.clientX * 0.1);
    setRotationX((prevX) => prevX - touch.clientY * 0.1);
  };

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };

  const handleTouchStart = () => {
    window.addEventListener("touchmove", handleTouchMove);
  };

  const handleTouchEnd = () => {
    window.removeEventListener("touchmove", handleTouchMove);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 overflow-hidden">
      <header className="text-4xl font-bold text-center align-center text-white mb-4">
        🎉 Happy Birthday Aunty Mutinta! 🎂
        </header>
        <header className="text-sm font-bold text-center align-center text-white mb-48">
        On your special day, I just want to take a moment to celebrate you. 🎈 Your kindness, wisdom, and love have always been a guiding light in my life. 🌟 May this year bring you as much happiness as you give to those around you. Enjoy your day to the fullest! 🎊
        </header>
      <div
        id="sphere"
        className="relative"
        style={{
          width: "300px",
          height: "300px",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
          transition: "transform 0.1s ease",
        }}
      >
        {/* Left Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(-${radius}px, 0, 0) rotateY(90deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[0]} alt="Left Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(${radius}px, 0, 0) rotateY(-90deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[1]} alt="Right Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Top Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, -${radius}px, 0) rotateX(90deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[2]} alt="Top Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, ${radius}px, 0) rotateX(-90deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[3]} alt="Bottom Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Front Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, 0, ${radius}px)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[4]} alt="Front Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Back Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, 0, -${radius}px) rotateY(180deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[5]} alt="Back Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Top-Left Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(-${radius / Math.sqrt(2)}px, -${radius / Math.sqrt(2)}px, 0) rotateX(45deg) rotateY(45deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[6]} alt="Top-Left Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Top-Right Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(${radius / Math.sqrt(2)}px, -${radius / Math.sqrt(2)}px, 0) rotateX(45deg) rotateY(-45deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[7]} alt="Top-Right Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Top-Front Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, -${radius / Math.sqrt(2)}px, ${radius / Math.sqrt(2)}px) rotateX(45deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[8]} alt="Top-Front Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Top-Back Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, -${radius / Math.sqrt(2)}px, -${radius / Math.sqrt(2)}px) rotateX(45deg) rotateY(180deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[9]} alt="Top-Back Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom-Left Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(-${radius / Math.sqrt(2)}px, ${radius / Math.sqrt(2)}px, 0) rotateX(-45deg) rotateY(45deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[10]} alt="Bottom-Left Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom-Right Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(${radius / Math.sqrt(2)}px, ${radius / Math.sqrt(2)}px, 0) rotateX(-45deg) rotateY(-45deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[11]} alt="Bottom-Right Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom-Front Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, ${radius / Math.sqrt(2)}px, ${radius / Math.sqrt(2)}px) rotateX(-45deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[12]} alt="Bottom-Front Face" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom-Back Face */}
        <div
          className="absolute"
          style={{
            transform: `translate3d(0, ${radius / Math.sqrt(2)}px, -${radius / Math.sqrt(2)}px) rotateX(-45deg) rotateY(180deg)`,
            width: `${faceSize}px`,
            height: `${faceSize}px`,
          }}
        >
          <img src={images[13]} alt="Bottom-Back Face" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default RotatingSphere;
