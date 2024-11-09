import { useState, useEffect } from "react";

export const useOrganizationSearch = (initialData) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState(""); // Estado para el tipo seleccionado
  const [filteredResults, setFilteredResults] = useState(initialData);

  useEffect(() => {
    const results = initialData.filter((org) => {
      const matchesSearchTerm =
        org.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.descripcion.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedType === "" || org.tipo === selectedType;

      return matchesSearchTerm && matchesType;
    });

    setFilteredResults(results);
  }, [searchTerm, selectedType, initialData]);

  // Reiniciar el tipo seleccionado al cambiar el término de búsqueda
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    setSelectedType(""); // Reiniciar el tipo al buscar
  };

  return {
    searchTerm,
    setSearchTerm: handleSearchTermChange,
    selectedType,
    setSelectedType,
    filteredResults,
  };
};
