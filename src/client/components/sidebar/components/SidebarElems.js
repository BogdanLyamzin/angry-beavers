import {v4} from 'uuid'

export const sidebarElems = [
    
    {
        page: "Main",
        to: "/",
        id: `${v4()}`
    },
    {
        page: "Days",
        to: "/days-type",
        id: `${v4()}`
    },
    {
        page: "Work-shift",
        to: "/work-shift",
        id: `${v4()}`
    },
    {
        page: "Work-place",
        to: "/work-place",
        id: `${v4()}`
    },
    {
        page: "Staff",
        to: "/staff",
        id: `${v4()}`
    },
    {
        page: "Working-month",
        to: "/working-month",
        id: `${v4()}`
    }
]