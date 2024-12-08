import prisma from "@/lib/db";
import Link from "next/link";

interface Props {
  params: { id: number };
}

export default async function PPVPage({ params }: Props) {
  params.id = Number(params.id);
  const getPPV = await prisma.pPV.findUnique({
    where: {
      id: params.id,
    },
    include: {
      matches: true,
      company: true, // All posts where ppv id = params.id
    },
  });
  return (
    <div>
      <h1>
        {getPPV?.company.name} {getPPV?.ppv_type} {getPPV?.ppv_name}
      </h1>
      {getPPV?.matches.map((match) => {
        return (
          <div key={match.id}>
            {match.id} | {match.title} | {match.winnerId}
          </div>
        );
      })}
      <Link href="/">Powrót</Link>
    </div>
  );
}
