// Detecta URLs públicas de Supabase Storage y aplica transformaciones de imagen.
// Devuelve WebP/AVIF cuando el navegador lo soporta.
export function optimizeImage(
  url,
  { w = 640, h = null, resize = "cover", quality = 80 } = {}
) {
  if (!url) return url;

  // Patrón Supabase public object:
  // https://<project>.supabase.co/storage/v1/object/public/<bucket>/<path/to/file>
  const m = url.match(
    /^(https:\/\/[^/]+\.supabase\.co)\/storage\/v1\/object\/public\/(.+)$/
  );
  if (m) {
    const origin = m[1];
    const key = m[2];
    const qp = new URLSearchParams({
      width: String(w),
      quality: String(quality),
    });
    if (h) {
      qp.set("height", String(h));
      qp.set("resize", resize); // cover | contain | fill
    }
    // render/image => activa el transformador
    return `${origin}/storage/v1/render/image/public/${key}?${qp.toString()}`;
  }

  // Si no es Supabase, la devolvemos tal cual (igual aplicamos lazy en <img>)
  return url;
}
