// routes/admin.tsx
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "utils/db.server"; // Asegúrate de que la ruta sea correcta

// Loader para obtener los usuarios de la base de datos
export const loader: LoaderFunction = async () => {
  try {
    const [users] = await db.query("SELECT * FROM users"); // Obtener usuarios desde MySQL
    return json(users); // Retornar los usuarios como JSON
  } catch (error) {
    console.error(error);
    return json({ error: "Error al cargar los usuarios" }, { status: 500 });
  }
};

// Action para manejar la creación y eliminación de usuarios
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");

  try {
    if (actionType === "create") {
      const username = formData.get("username") as string;
      const age = Number(formData.get("age"));
      const gender = formData.get("gender") as string;

      await db.query("INSERT INTO users (username, age, gender) VALUES (?, ?, ?)", [username, age, gender]);
      return redirect("/admin");
    }

    if (actionType === "delete") {
      const userId = formData.get("userId");
      await db.query("DELETE FROM users WHERE id = ?", [userId]);
      return redirect("/admin");
    }
  } catch (error) {
    console.error(error);
    return json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }

  return null;
};

// Componente Admin para manejar la interfaz
export default function Admin() {
  const users = useLoaderData();

  // Verificar si `users` es un array, si no lo es, mostrar mensaje de error
  if (!Array.isArray(users)) {
    return <p>Error al cargar los usuarios o no hay usuarios disponibles.</p>;
  }

  return (
    <div>
      <h1>Administración de Usuarios</h1>

      <h2>Añadir Usuario</h2>
      <form method="post">
        <label>
          Nombre:
          <input type="text" name="username" required />
        </label>
        <label>
          Edad:
          <input type="number" name="age" required />
        </label>
        <label>
          Género:
          <select name="gender" required>
            <option value="chico">Chico</option>
            <option value="chica">Chica</option>
          </select>
        </label>
        <button type="submit" name="_action" value="create">
          Añadir Usuario
        </button>
      </form>

      <h2>Lista de Usuarios</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.username} ({user.age} años, {user.gender})
              <form method="post">
                <input type="hidden" name="userId" value={user.id} />
                <button type="submit" name="_action" value="delete">
                  Eliminar
                </button>
              </form>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios registrados.</p>
      )}
    </div>
  );
}
