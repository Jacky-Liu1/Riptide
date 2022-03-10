import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


const Feature = ({ title, text }) => {
  return (
    <Stack>
      <Text fontWeight={800}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW={'5xl'}>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={150}>
          <Feature
            title={'Fixed Rate Lending'}
            text={
              'Reduce your exposure to fluctuations in intererst rates with multiple cross-chain assets'
            }
          />
          <Feature
            title={'Undercollateralized loans'}
            text={
              'Now borrrow more than you have. We secure the protocol with a subscription model'
            }
          />
          <Feature
            title={'Multichain'}
            text={
              'Multichain just makes sense. Why limit the type of assets you can utilize on a chain?'
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}