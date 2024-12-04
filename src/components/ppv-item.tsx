import { I_PPV } from "@/shared/I_PPVS";
import {Text } from "@mantine/core";
import Link from "next/link";

interface IProps{
    id: Number;
}

export async function PPVItem({id}:IProps) {

    const ppvs:I_PPV[] = await fetch('http://localhost:3000/api/ppv').then(
        (res) => res.json()
    )

    const ppv = ppvs.find((ppv)=> ppv.id === id)!;
    
  return (
    <Link href={'/ppv/'+id} className="flex items-center justify-between bg-blue-400 rounded-md p-1 px-4">
        <div className="flex items-center gap-2">
            <Text>{ppv.company}</Text>
            <div className="flex flex-col items-center">
                <Text>{ppv.ppv_type}</Text>
                <Text className="text-xs">{ppv.ppv_name}</Text>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <Text className="text-xs">Main Event</Text>
            <Text>{ppv.matches[ppv.matches.length-1].wrestler1} vs {ppv.matches[ppv.matches.length-1].wrestler2}</Text>
        </div>
        <Text>{ppv.location}</Text>
    </Link>
  );
}
