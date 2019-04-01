import React, { Component } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import './selectItemField.scss'

export default class SelectItemField extends Component {
  render() {
    const {
      items = [],
      onChange,
      value,
      name
    } = this.props


    return (
      <FormControl className="selectItemField">
        <Select
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              labelWidth={0}
              name={name}
              id={String(Math.random())}
            />
          }
        >
        { items.map(item => <MenuItem key={String(Math.random())} value={item.value}>{item.label}</MenuItem>) }
        </Select>
      </FormControl>
    )
  }
}
