import { PPVList } from "@/components/ppv-list";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";

export default async function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "indigo", to: "cyan", deg: 90 }}
          >
            WrestleBase
          </Text>
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <Title className="text-center mt-2">Najnowsze Wyniki</Title>

        <PPVList />
      </AppShellMain>
    </AppShell>
  );
}
