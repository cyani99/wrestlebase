const ppvs = [{
    id: 1,
    company: "WWE",
    ppv_type: "RAW",
    ppv_name: "31/11/2021",
    ppv: false,
    location: "London, England",
    matches: [
        {
            titleDefense: false,
            title: "",
            wrestler1: "The Miz",
            wrestler2: 'Karion Kross',
            mainEvent: false,
        },
        {
            titleDefense: true,
            title: "WWE Championship",
            wrestler1: "Sami Zayn",
            wrestler2: 'Jay Uso',
            mainEvent: true,
        }
    ]
},
{
    id: 2,
    company: "AEW",
    ppv_type: "Dynamite",
    ppv_name: "23/11/2021",
    ppv: false,
    location: "Los Angeles, California",
    matches: [
        {
            titleDefense: false,
            title: "",
            wrestler1: "Darby Allin",
            wrestler2: 'MJF',
            mainEvent: false,
        },
        {
            titleDefense: true,
            title: "AEW Championship",
            wrestler1: "Samoa Joe",
            wrestler2: 'Jon Moxley',
            mainEvent: true,
        }
    ]
}
]

import { NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json(ppvs);
}