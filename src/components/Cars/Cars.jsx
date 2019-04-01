import React, { useState } from 'react'
import SelectItemField from '../SelectItemField/SelectItemField'
import Grid from '@material-ui/core/Grid'

export default function Cars() {

  const [brand, setBrand] = useState('item 1')
  const [brands, setBrands] = useState([
    {
      value: 'item 1',
      label: 'item 1'
    },
    {
      value: 'item 2',
      label: 'item 2'
    },
    {
      value: 'item 3',
      label: 'item 3'
    }
  ])

  const [model, setModel] = useState('item 1')
  const [models, setModels] = useState([
    {
      value: 'item 1',
      label: 'item 1'
    },
    {
      value: 'item 2',
      label: 'item 2'
    },
    {
      value: 'item 3',
      label: 'item 3'
    }
  ])

  const [year, setYear] = useState('item 1')
  const [years, setYears] = useState([
    {
      value: 'item 1',
      label: 'item 1'
    },
    {
      value: 'item 2',
      label: 'item 2'
    },
    {
      value: 'item 3',
      label: 'item 3'
    }
  ])


  function handleChangeBrand (e) {
    setBrand(e.target.value)
  }

  function handleChangeModel (e) {
    setModel(e.target.value)
  }

  function handleChangeYear (e) {
    setYear(e.target.value)
  }

  return (
    <div className="cars">
      <div className="container">
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <SelectItemField
              value={brand}
              onChange={handleChangeBrand}
              name={'brand'}
              items={brands}
            />
          </Grid>       
          <Grid item xs={4}>
            <SelectItemField
              value={model}
              onChange={handleChangeModel}
              name={'model'}
              items={models}
            />
          </Grid>       
          <Grid item xs={4}>
            <SelectItemField
              value={year}
              onChange={handleChangeYear}
              name={'year'}
              items={years}
            />
          </Grid>       
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            {
              `${brand}, ${model}, ${year}`
            }
          </Grid>
        </Grid>
      
      </div>
    </div>
  )
}
