import { useState } from "react";

const usePagination = ( Projects, numberOfPages ) => {
    const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage =  numberOfPages // Número de países por página

  // Calcula el índice del último país en la página actual
  const indexOfLastProject = currentPage * projectPerPage;
  // Calcula el índice del primer país en la página actual
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  // Obtiene los países de la página actual
  const currentProjects = Projects.slice(indexOfFirstProject, indexOfLastProject);

  // Cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return {
    currentProjects,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastProject
  }
}

export default usePagination