import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Species } from 'src/interfaces/Species'
import { SpeciesContext } from 'src/providers/SpeciesProvider'

interface SpeciesListItemProps {
  item: Species
}

function SpeciesListItem({item}: SpeciesListItemProps) {
  return (
    <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={item.name} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{item.name}</p>
        <p className="text-sm text-gray-500">{item.createdAt}</p>
      </div>
    </li>
  )
}

export default function SpeciesList() {
  const { species, fetchSpecies } = useContext(SpeciesContext)

  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  return (
    <ul className="divide-y divide-gray-200">
      {species.map((speciesObj) => (
		<SpeciesListItem item={speciesObj} />
      ))}
    </ul>
  )
}
