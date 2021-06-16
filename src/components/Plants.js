import React, { useState } from 'react';
import { PlantList } from './PlantList';
import { PlantForm } from './PlantForm';

export function Plants (){

    const loadMoreCommit = () => {
        console.log("Add Plant Click");
    };

    return (
        <div>
            <p>PlantForm</p>
            <button onClick={loadMoreCommit}>Add Plant</button>
            <div>
                <PlantList />
                <PlantForm />
            </div>
        </div>
    );
}