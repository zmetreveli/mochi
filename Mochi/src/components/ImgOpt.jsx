import React from "react";
import { optimizeImage } from "../utils/optimizeImage";

// Uso típico:
// <ImgOpt src={product.imgSrc} alt={product.name} fixed priority={idx < 2} />
export default function ImgOpt({
  src,
  alt = "",
  sizes,
  fixed = true, // cuadrícula uniforme por defecto (4:3)
  widthSet = [320, 640, 960], // 3 variantes pequeñas (rápidas)
  quality = 80,
  priority = false, // las 1–2 primeras con prioridad
}) {
  const [w1, w2, w3] = widthSet;

  const mk = (w) =>
    fixed
      ? optimizeImage(src, {
          w,
          h: Math.round((w * 3) / 4), // 4:3
          resize: "cover",
          quality,
        })
      : optimizeImage(src, { w, quality });

  const s1 = mk(w1);
  const s2 = mk(w2);
  const s3 = mk(w3);

  const loading = priority ? "eager" : "lazy";
  const fetchpriority = priority ? "high" : "auto";

  return (
    <img
      src={s2}
      srcSet={`${s1} ${w1}w, ${s2} ${w2}w, ${s3} ${w3}w`}
      sizes={
        sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      }
      loading={loading}
      fetchpriority={fetchpriority}
      decoding="async"
      alt={alt}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}
