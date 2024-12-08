import { Flex } from "@mantine/core";
import { PPVItem } from "./ppv-item";
import prisma from "@/lib/db";

export async function PPVList() {
  const ppvs = await prisma.pPV.findMany();

  return (
    <Flex
      direction={{ base: "column", sm: "column" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "center" }}
      className="mt-5"
    >
      {
        ppvs.map((ppv) => {
          return <PPVItem key={ppv.id} id={ppv.id} />;
        })!
      }
    </Flex>
  );
}
