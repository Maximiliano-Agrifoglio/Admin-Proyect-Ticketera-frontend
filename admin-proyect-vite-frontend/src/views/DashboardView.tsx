import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/api/ProjectAPI";

const DashboardView = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });
  if (isLoading) return 'Cargando...'
  if (data) return (
    <>
      <h1 className="text-5xl font-black">Mis Proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Maneja y Administra tus
        proyectos</p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 px-10 text-xl font-bold
            text-white p-3 cursor-pointer transition-colors"
          to='/projects/create'
        >Nuevo Proyecto</Link>
      </nav>

      {data.length ? (
        <p>Si hay projectos</p>
      ) : (
        <p className="text-center py-20">No hay proyectos aún {''}
          <Link
            to='/projects/create'
            className="text-fuchsia-500 font-bold"
          >crear proyecto</Link>
        </p>
      )}
    </>
  )
}

export default DashboardView;

