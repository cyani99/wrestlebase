import { I_PPV } from "@/shared/I_PPVS";
import Link from "next/link";

interface Props{
    params: {id: number};
}

export default async function PPVPage({params}: Props){
    const ppvs:I_PPV[] = await fetch('http://localhost:3000/api/ppv').then(
        (res) => res.json()
    )

    params.id = Number(params.id);
    const ppv = ppvs.find((ppv)=> ppv.id === params.id)!;

    return(
        <div>
            <h1>{ppv?.company} {ppv?.ppv_type} {ppv?.ppv_name}</h1>
            {ppv?.matches.map((match)=>{
                return (
                    <div>
                        <div>{match.title}</div>
                        <div>{match.wrestler1} vs {match.wrestler2}</div>
                    </div>
                )
            })}
            <Link href="/">Powrót</Link>
        </div>
    )
}