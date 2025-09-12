// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import axios from "axios";

// const Cloudinary = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");
//   const [publicId, setPublicId] = useState(""); // Capturar public_id
//   const [showModal, setShowModal] = useState(false); // Para controlar el modal
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");

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
//     formData.append("upload_preset", "mochi_type"); // Cambia por tu upload preset

//     setUploading(true);
//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dtosyoidz/image/upload", // Cambia por tu cloud name
//         formData
//       );
//       setImageUrl(response.data.secure_url);
//       setPublicId(response.data.public_id); // Guardamos el public_id para eliminar después
//       alert("Imagen subida con éxito!");
//     } catch (error) {
//       console.error("Error subiendo la imagen:", error);
//       alert("Error subiendo la imagen.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!publicId) {
//       alert("No hay imagen para eliminar.");
//       return;
//     }

//     try {
//       await axios.post("/delete-image", { public_id: publicId });
//       setImageUrl("");
//       setPublicId("");
//       alert("Imagen eliminada con éxito!");
//     } catch (error) {
//       console.error("Error eliminando la imagen:", error);
//       alert("Error eliminando la imagen.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     if (selectedFile) {
//       formData.append("image", selectedFile);
//     }

//     try {
//       const response = await axios.put(
//         `/api/products/${publicId}`, // Cambia este ID según sea necesario
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Producto actualizado con éxito!");
//       setShowModal(false);
//     } catch (error) {
//       console.error("Error updating product:", error);
//       alert("Hubo un error al actualizar el producto.");
//     }
//   };

//   return (
//     <div className={styles.mainBox}>
//       <button onClick={() => setShowModal(true)}>Editar Producto</button>

//       {showModal && (
//         <div className={styles.modalContent}>
//           <h2>Edit Product</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </label>
//             <label>
//               Description:
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </label>
//             <label>
//               Price:
//               <input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </label>

//             <label>
//               Imagen:
//               <input type="file" onChange={handleFileChange} />
//               <button
//                 type="button"
//                 onClick={handleUpload}
//                 disabled={uploading}
//                 style={{ marginTop: "10px" }}
//               >
//                 {uploading ? "Subiendo..." : "Subir Imagen"}
//               </button>
//             </label>

//             {imageUrl && (
//               <>
//                 <img
//                   src={imageUrl}
//                   alt="Imagen subida"
//                   style={{ width: "200px", margin: "10px" }}
//                 />
//                 <button type="button" onClick={handleDelete}>
//                   Eliminar Imagen
//                 </button>
//               </>
//             )}

//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setShowModal(false)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cloudinary;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Modal from "react-modal";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import mochiImage from "../../assets/img/mochinicial.png";
import styles from "./styles.module.css";

export default function Cloudinary({
  isModalOpen,
  setIsModalOpen,
  mochiData = {},
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState(mochiData.img || mochiImage); // Imagen inicial

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: mochiData.name || "",
      description: mochiData.description || "",
      price: mochiData.price || "",
    },
  });

  // Actualizar vista previa de la imagen
  useEffect(() => {
    if (!file) return;
    const viewHandler = () => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result); // Mostrar vista previa
      };
    };
    viewHandler();
  }, [file]);

  // Manejar envío del formulario
  const onSubmit = async (data) => {
    setIsLoading(true);

    // Si hay una nueva imagen seleccionada
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dtosyoidz/image/upload",
          formData
        );

        data.img = res.data.secure_url; // Añadir URL de la imagen al objeto de datos
      } catch (error) {
        console.error("Error subiendo imagen:", error);
        alert("Error subiendo la imagen.");
        setIsLoading(false);
        return;
      }
    }

    // Aquí deberías realizar una llamada a tu API para actualizar el producto Mochi
    try {
      await axios.put("/api/mochi", data); // Ajusta la URL según tu backend
      alert("Mochi actualizado con éxito");
      setIsModalOpen(false); // Cierra el modal
    } catch (error) {
      console.error("Error actualizando Mochi:", error);
      alert("Error al actualizar el producto.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => setIsModalOpen(false)}
      className={styles.modalContent}
      overlayClassName="modalOverlay"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.form
          initial={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: -100 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Editar Mochi</h2>

          <div>
            <label>Nombre:</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Nombre del producto"
              required
            />
          </div>

          <div>
            <label>Descripción:</label>
            <textarea
              {...register("description")}
              placeholder="Descripción del producto"
              required
            />
          </div>

          <div>
            <label>Precio:</label>
            <input
              type="number"
              step="0.01"
              {...register("price")}
              placeholder="Precio"
              required
            />
          </div>

          <div>
            <label>Imagen:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {image && <img src={image} alt="Vista previa" width="200px" />}
          </div>

          <button type="submit" disabled={isLoading}>
            {!isLoading ? (
              "Guardar Cambios"
            ) : (
              <BeatLoader size={8} color="#fff" />
            )}
          </button>
        </motion.form>
      </motion.div>
    </Modal>
  );
}
