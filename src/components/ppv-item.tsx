import prisma from "@/lib/db";
import { Text } from "@mantine/core";
import Link from "next/link";

interface IProps {
  id: number;
}

export async function PPVItem({ id }: IProps) {
  const ppv = await prisma.pPV.findUnique({
    where: { id },
    include: { company: true },
  });

  return (
    <Link
      href={"/ppv/" + id}
      className="flex items-center justify-between bg-blue-400 rounded-md p-1 px-4"
    >
      <div className="flex items-center gap-2">
        <Text>
          {ppv?.id}:{ppv?.company.name}
        </Text>
        <div className="flex flex-col items-center">
          <Text>{ppv?.ppv_type}</Text>
          <Text className="text-xs">{ppv?.ppv_name}</Text>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Text className="text-xs">Main Event</Text>
        <Text></Text>
      </div>
      <Text>{ppv?.location}</Text>
    </Link>
  );
}
