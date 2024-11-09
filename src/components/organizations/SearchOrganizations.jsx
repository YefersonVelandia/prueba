import React, { useState } from "react";
import { SearchInput } from "../common/SearchInput";
import { FilterDropdown } from "../filters/FilterDropdown";
import { OrganizationCard } from "./OrganizationCard";
import { useOrganizationSearch } from "../../hooks/useOrganizationSearch";
import { organizacionesData } from "../../assets/data/organizaciones";

const SearchOrganizations = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
    filteredResults,
  } = useOrganizationSearch(organizacionesData);

  // Obtener todos los tipos únicos
  const uniqueTypes = [...new Set(organizacionesData.map((org) => org.tipo))];
  const [showAll, setShowAll] = useState(false);

  // Limitar el número de organizaciones a mostrar
  const displayedResults = showAll
    ? filteredResults
    : filteredResults.slice(0, 5);

  return (
    <div className="flex gap-6 max-w-6xl mx-auto p-6">
      {/* Columna izquierda - Filtros */}
      <aside className="w-64 flex-shrink-0">
        <h2 className="text-lg font-semibold text-indigo-900 mb-4">
          Resultados de búsqueda
        </h2>

        {/* Buscador */}
        <div className="mb-6">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar"
          />
        </div>

        {/* Filtros */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-900 mb-3">
            Filtros
          </h3>
          <FilterDropdown
            label="Tipo de perfil"
            options={uniqueTypes}
            selectedOption={selectedType}
            onChange={setSelectedType}
          />
        </div>
      </aside>

      {/* Columna derecha - Resultados */}
      <main className="flex-1">
        <h2 className="text-lg font-semibold text-indigo-900 mb-4">
          Organizaciones
        </h2>

        <div className="space-y-4">
          {displayedResults.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>

        {filteredResults.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full text-center text-indigo-600 py-4 hover:text-indigo-700"
          >
            {showAll ? "Ver menos" : "Ver más organizaciones"}
          </button>
        )}

        {filteredResults.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No se encontraron organizaciones que coincidan con tu búsqueda.
          </p>
        )}
      </main>
    </div>
  );
};

export default SearchOrganizations;
