import React from 'react'
import { AddPhoto } from '../photos/AddPhoto'
import { Search } from '../search/Search'

export const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Search />
            <AddPhoto />
        </div>
    )
}
