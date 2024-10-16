// routes/users.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "utils/db.server"; // Asegúrate de que la ruta esté correcta

// Loader que carga los usuarios desde la base de datos
export const loader: LoaderFunction = async () => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    console.log(users); // Verificar que los usuarios se obtengan correctamente
    return json(users);
  } catch (error) {
    console.error("Error al cargar los usuarios:", error);
    return json({ error: "No se pudo cargar la lista de usuarios" }, { status: 500 });
  }
};

export default function Users() {
  const users = useLoaderData(); // Cargar los usuarios desde el loader

  // Verificar si `users` es un array antes de usar map()
  if (!Array.isArray(users)) {
    return <p>No hay usuarios disponibles o ocurrió un error al cargar los usuarios.</p>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.username} ({user.age} años, {user.gender})
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios registrados.</p>
      )}
    </div>
  );
}
