import React from 'react'
import {
   FormControl, ToggleButtonGroup, ToggleButton
} from "@mui/material"

const DirectorySearchForm = () => {
    return (
        <FormControl>
            <ToggleButtonGroup>
                <ToggleButton value="in-person">In person</ToggleButton>
                <ToggleButton value="remote">Online</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup>
                <ToggleButton value="english">English</ToggleButton>
                <ToggleButton value="italian">Italian</ToggleButton>
                <ToggleButton value="french">French</ToggleButton>
            </ToggleButtonGroup>
        </FormControl>
    )
}

const DirectorySearchPage = () => {
    return (
        <DirectorySearchForm />
    )
}

export default DirectorySearchPage