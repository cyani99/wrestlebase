import { useMantineColorScheme, Button, Group, Flex, Text } from "@mantine/core";
import { PPVItem } from "./ppv-item";
import { I_PPV } from "@/shared/I_PPVS";

interface IProps{
  ppvs:I_PPV[],
}

export function PPVList({ppvs}:IProps) {

  return (
    <Flex
      direction={{ base: 'column', sm: 'column' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      className="mt-5"
    >
      {ppvs.map((ppv)=>{
        return <PPVItem id={ppv.id}/>
      })!}
    </Flex>
  );
}
