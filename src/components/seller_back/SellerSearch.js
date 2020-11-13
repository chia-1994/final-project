import Container from 'react-bootstrap/Container'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function SellerSearch(props) {
  const { getData, setOption, Option, setInputSearch, inputSearch } = props

  const onChange = (e) => {
    setOption(e.target.value)
  }
  return (
    <Container>
      <div class="shop_list-search">
        <span
          onClick={() => {
            getData()
          }}
        >
          <Button>搜尋</Button>
        </span>
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value)
          }}
        />

        <select onChange={onChange} value={Option} class="shop_list-order">
          <option value="0">未出貨</option>
          <option value="1">已出貨</option>
        </select>
        <select onChange={onChange} value={Option} class="shop_list-order">
          <option value="2">未出貨</option>
          <option value="3">已出貨</option>
        </select>
      </div>
    </Container>
  )
}
export default SellerSearch
