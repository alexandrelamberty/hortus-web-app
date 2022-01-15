import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SeedContext } from 'src/providers/SeedProvider'

export default function SeedList() {
  const { seeds, fetchSeeds } = useContext(SeedContext)

  useEffect(() => {
    fetchSeeds()
  }, [fetchSeeds])

  return (
    <div>
      {seeds.map((seed) => (
        <div key={seed._id}>
          <h2>{seed.name}</h2>
        </div>
      ))}
    </div>
  )
}
