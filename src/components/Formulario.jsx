import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');

  // Función para errores
  const [error, setError] = useState(false);

  // Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault()

    // Validación
    if(nombre === '' || apellido === '' || edad === '' || email === ''){
      // alert('Todos los campos son obligatorios')
      setError(true);
      return
    }
    // Si el formulario se envía correctamente devolvemos todos nuestros estados al incial y reseteamos el formulario
    setError(false);
    setNombre('');
    setApellido('');
    setEdad('');
    setEmail('');
  };

  return (
    <div>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}

        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input type="text" name="apellido" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>

        <div className="form-group">
          <label>Edad</label>
          <input type="text" name="edad" className="form-control" onChange={(e) => setEdad(e.target.value)} value={edad} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>

      </form>
      <hr />
      <h1>Datos ingresados</h1>
      {nombre} - {apellido} - {edad} - {email}
    </div>
  )
}

export default Formulario