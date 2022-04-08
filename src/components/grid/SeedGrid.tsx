import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SeedContext } from 'src/providers/SeedProvider'
import { Container, Grid, Table } from 'semantic-ui-react'
import SeedGridCard from './SeedGridCard'
import { Seed } from 'src/interfaces/Seed'

export default function SeedGrid() {
  const { seeds, fetchSeeds } = useContext(SeedContext)

  useEffect(() => {
    fetchSeeds()
  }, [fetchSeeds])

  return (
    <div className='grid grid-cols-1 md:grid-cols-6'>
      {seeds.map((seed: Seed) => (
        <SeedGridCard key={seed._id} seed={seed} />
      ))}
    </div>
  )
}
