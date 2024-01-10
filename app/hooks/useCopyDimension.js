import { useState, useEffect } from "react";

export default function useCopyDimension(originalId) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const originalElement = document.getElementById(originalId);
            if (originalElement) {
                const originalHeight = originalElement.offsetHeight;
                setHeight(originalHeight);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [originalId]);

    return height;
}