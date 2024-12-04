import { PPVList } from "@/components/ppv-list";
import { I_PPV } from "@/shared/I_PPVS";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";

export default async function Home() {
  const ppvs:I_PPV[] = await fetch("http:/localhost:3000/api/ppv").then((res) => res.json())
  console.log(ppvs);
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
            <Text             inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'indigo', to: 'cyan', deg: 90 }}>WrestleBase</Text>
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <Title className="text-center mt-2">
         Najnowsze Wyniki
        </Title>

        <PPVList ppvs={ppvs}/>
      </AppShellMain>
    </AppShell>
  );
}
