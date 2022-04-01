import React from 'react';
import { SeedProvider } from 'src/providers/SeedProvider'
import { CultureProvider } from 'src/providers/CultureProvider'
import { SpeciesProvider } from 'src/providers/SpeciesProvider'
import { combineComponents } from 'src/utils/combineComponents';
const providers = [
	SpeciesProvider,
	SeedProvider,
	CultureProvider	
]
export const AppContextProvider = combineComponents(...providers);
