import React, { useState, useEffect } from 'react'
import SelectItemField from '../SelectItemField/SelectItemField'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { api } from '../../helpers/api'

export default function Cars() {

  const [brand, setBrand] = useState('')
  const [brands, setBrands] = useState([])

  const [model, setModel] = useState('')
  const [models, setModels] = useState([])

  const [year, setYear] = useState('')
  const [years, setYears] = useState([])

  function handleChangeBrand (e) {
    setBrand(e.target.value)
  }

  function handleChangeModel (e) {
    setModel(e.target.value)
  }

  function handleChangeYear (e) {
    setYear(e.target.value)
  }

  useEffect(() => {
    brand && api(`/marcas/${brand}/modelos`)
    .then(data => {
      setModels(data.modelos.map(e => ({
        label: e.nome,
        value: e.codigo
      })))
      setYears(data.anos.map(e => ({
        label: e.nome,
        value: e.codigo
      })))
    })
  }, [brand])

  useEffect(() => {
    api('/marcas')
    .then(data => {
      setBrands(data.map(e => ({
        label: e.nome,
        value: e.codigo
      })))
    })
  }, [])

  return (
    <div className="cars">
      <div className="container">
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <h4 className="h4">Dados do veículo:</h4>
          </Grid>
          <Grid item xs={4}>
            <h4 className="h4">Dados do veículo:</h4>
          </Grid>
          <Grid item xs={4}>
            <h4 className="h4">Dados do veículo:</h4>
          </Grid>
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
        <Grid container spacing={16} className="mt50">
          <Grid item xs={12}>
            <h2 className="h3">Dados do veículo:</h2>
          </Grid>
          <Grid item xs={12}>
            <Card className={'card'}>
              <div className="vehicle">
                <div className="image">
                  <img src="https://via.placeholder.com/150" alt=""/>
                </div>
                <div className="data">
                  <h3 className="h3">VM - Volkswagem</h3>
                  <p className="p">Amarok 2018 - Prata</p>
                  <div className="tags">
                    <div className="category">Diesel</div>
                    <p className="p">2014</p>
                    <p className="p">FIPE: 2045644</p>
                  </div>
                </div>
                <div className="price">
                  <h3 className="h3">R$ 95.500,00</h3>
                  <p className="p">Mês de ref. Março de 2018</p>

                  <div className="star">
                    <button className="starButton">Favoritar</button>
                  </div>
                </div>
              </div>

            </Card>
          </Grid>
        </Grid>
      
        <Grid container spacing={16} className="mt50">
          <Grid item xs={12}>
            <h2 className="h3">Veículos favoritados:</h2>
          </Grid>
          <Grid item xs={12}>
            <Card className={'card'}>
              <div className="table">
                <div className="titles">
                  <div className="title">Marca</div>
                  <div className="title">Modelo</div>
                  <div className="title">Preço</div>
                </div>
                <div className="content">
                  <div className="line">
                    <Grid item xs={4}>
                      Gol
                    </Grid>
                    <Grid item xs={4}>
                      Gol
                    </Grid>
                    <Grid item xs={4}>
                      Gol
                    </Grid>
                  </div>
                </div>
              </div>

            </Card>
          </Grid>
        </Grid>
      
      </div>
    </div>
  )
}
