import React, { useState } from 'react';
import './App.css'; // Archivo CSS para los estilos

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({}); // Estado para almacenar los errores de validación

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del formulario
    const errors = {};
    if (!formData.name) {
      errors.name = 'Por favor ingresa tu nombre';
    }
    if (!formData.email) {
      errors.email = 'Por favor ingresa tu correo electrónico';
    }

    if (Object.keys(errors).length === 0) {
      console.log(formData);
      // Aquí puedes agregar la lógica para enviar los datos del formulario a tu servidor

      // Reiniciar el formulario
      setFormData({ name: '', email: '' });
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="container">
      <h1>Formulario React</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
