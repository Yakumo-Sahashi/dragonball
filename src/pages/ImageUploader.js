import React, { useState } from 'react';

function ImageUploader() {
  const [files, setFiles] = useState([]);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files.length) {
      alert('Selecciona al menos una imagen');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]); // "images" debe coincidir con el campo que espera multer
    }

    try {
      const res = await fetch('http://localhost:3000/api/uploads', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error al subir las imágenes');
      }

      setResponse(data);
      alert('Imágenes subidas correctamente');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button type="submit">Subir imágenes</button>

      {response && (
        <div>
          <h4>Respuesta del servidor:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}

export default ImageUploader;
