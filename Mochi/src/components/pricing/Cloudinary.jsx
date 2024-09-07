// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import axios from "axios";

// const Cloudinary = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert("Por favor selecciona una imagen para subir.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);
//     formData.append("upload_preset", "mochi_type"); // Configuración en Cloudinary

//     setUploading(true);
//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dtosyoidz/image/upload",
//         formData
//       );
//       setImageUrl(response.data.secure_url);
//       alert("Imagen subida con éxito!");
//     } catch (error) {
//       console.error("Error subiendo la imagen:", error);
//       alert("Error subiendo la imagen.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className={styles.mainBox}>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={uploading}>
//         {uploading ? "Subiendo..." : "Subir Imagen"}
//       </button>
//       {imageUrl && (
//         <img
//           src={imageUrl}
//           alt="Imagen subida"
//           style={{ width: "200px", margin: "10px" }}
//         />
//       )}
//     </div>
//   );
// };

// export default Cloudinary;

import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

const Cloudinary = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState(""); // Capturar public_id

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Por favor selecciona una imagen para subir.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "mochi_type"); // Cambia por tu upload preset

    setUploading(true);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtosyoidz/image/upload", // Cambia por tu cloud name
        formData
      );
      setImageUrl(response.data.secure_url);
      setPublicId(response.data.public_id); // Guardamos el public_id para eliminar después
      alert("Imagen subida con éxito!");
    } catch (error) {
      console.error("Error subiendo la imagen:", error);
      alert("Error subiendo la imagen.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!publicId) {
      alert("No hay imagen para eliminar.");
      return;
    }

    try {
      // Realizamos la solicitud al backend para eliminar la imagen
      await axios.post("/delete-image", { public_id: publicId });
      setImageUrl("");
      setPublicId("");
      alert("Imagen eliminada con éxito!");
    } catch (error) {
      console.error("Error eliminando la imagen:", error);
      alert("Error eliminando la imagen.");
    }
  };

  return (
    <div className={styles.mainBox}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Subiendo..." : "Subir Imagen"}
      </button>
      {imageUrl && (
        <>
          <img
            src={imageUrl}
            alt="Imagen subida"
            style={{ width: "200px", margin: "10px" }}
          />
          <button onClick={handleDelete}>Eliminar Imagen</button>
        </>
      )}
    </div>
  );
};

export default Cloudinary;
