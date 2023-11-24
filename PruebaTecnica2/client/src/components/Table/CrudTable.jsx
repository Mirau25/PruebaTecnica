import { Link} from "react-router-dom"



function CrudTable() {

    return (
        <>
            <div>
                <h1>Lista De empleados</h1>
                <Link class="linkStyle" to="/agregar" >Crear  <i className="fa-solid fa-user-plus"></i> </Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Área</th>
                            <th scope="col">Boletín</th>
                            <th scope="col">Modificar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gladis Fernández</td>
                            <td>gfernandez@example.com</td>
                            <td>Femenino</td>
                            <td>Ventas</td>
                            <td>Si</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>
                            <td><i className="fa-solid fa-trash"></i></td>

                        </tr>

                        <tr>
                            <td>Felipe Gómez</td>
                            <td>fgomez@example.com</td>
                            <td>Masculino</td>
                            <td>Calidad</td>
                            <td>No</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>
                            <td><i className="fa-solid fa-trash"></i></td>

                        </tr>

                        <tr>
                            <td>Adriana Loiza</td>
                            <td>aloaiza@example.com</td>
                            <td>Femenino</td>
                            <td>Producción</td>
                            <td>Si</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                            <td><i className="fa-solid fa-trash-can"></i> </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CrudTable
