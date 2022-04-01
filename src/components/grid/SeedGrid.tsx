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
    <Grid>
      <Grid.Row columns={5}>
        {seeds.map((seed: Seed) => (
          <Grid.Column>
            <SeedGridCard key={seed._id} seed={seed} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}