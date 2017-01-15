import React from 'react'
import FilterLink from '../containers/FilterLink'

export default function Footer() {
  return (
    <div>
      <FilterLink filter='SHOW_ALL'>
        全て
      </FilterLink>
      { " | " }
      <FilterLink filter='SHOW_COMPLETED'>
        完了
      </FilterLink>
      { " | " }
      <FilterLink filter='SHOW_ACTIVE'>
        未完了
      </FilterLink>
    </div>
  )
}
