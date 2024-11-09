export const OrganizationCard = ({ organization }) => {
  return (
    <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
      <img
        src={organization.imagen}
        alt={organization.nombre}
        className="w-10 h-10 rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-indigo-900">
              {organization.nombre}
            </h3>
            <p className="text-sm text-gray-500">{organization.tipo}</p>
            <p className="text-sm text-gray-500">
              {organization.num_seguidores} seguidores
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {organization.descripcion}
            </p>
          </div>
          <button className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};
