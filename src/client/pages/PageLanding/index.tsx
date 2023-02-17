import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageLanding = () => {
  return (
    <Chakra.VStack w="full" spacing="4" px="8">
      <Chakra.HStack h="10vh" w="full" justify="space-between">
        <Chakra.Text fontSize="lg">StatsHub</Chakra.Text>
        <Chakra.Button size="lg">Log In</Chakra.Button>
      </Chakra.HStack>

      <Chakra.Grid
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        maxW="container.lg"
        w="full"
        h="full"
        minH="60vh"
        gap="8"
      >
        <Chakra.VStack h="full" justify="center" spacing="8" align="flex-start">
          <Chakra.Text fontSize="5xl" fontWeight="bold" lineHeight="1.2">
            Manage, measure and share your professional achievements.
          </Chakra.Text>
          <Chakra.Text fontSize="lg" lineHeight="1.5">
            StatsHub is a todo web app focused on helping professionals to
            manage, measure, visualize and share professional achievements, so
            you can prove your value to the yourself, your peers, your managers
            and the market.
          </Chakra.Text>
          <Chakra.Button size="lg">Start for Free</Chakra.Button>
        </Chakra.VStack>

        <Chakra.VStack justify="center">
          <Chakra.VStack
            bg="gray.50"
            align="flex-start"
            w="full"
            p="8"
            maxW="350px"
            spacing="4"
          >
            <Chakra.Stat>
              <Chakra.StatNumber>Last Week Stats</Chakra.StatNumber>
              <Chakra.StatHelpText>Feb 12 - Feb 28</Chakra.StatHelpText>
            </Chakra.Stat>

            <Chakra.HStack w="full" justify="space-between">
              <Chakra.Stat>
                <Chakra.StatLabel>Hours Worked</Chakra.StatLabel>
                <Chakra.StatNumber>28</Chakra.StatNumber>
                <Chakra.StatHelpText>
                  <Chakra.StatArrow type="decrease" />
                  2%
                </Chakra.StatHelpText>
              </Chakra.Stat>

              <Chakra.Stat>
                <Chakra.StatLabel>Tasks Completed</Chakra.StatLabel>
                <Chakra.StatNumber>28</Chakra.StatNumber>
                <Chakra.StatHelpText>
                  <Chakra.StatArrow type="increase" />
                  10%
                </Chakra.StatHelpText>
              </Chakra.Stat>
            </Chakra.HStack>

            <Chakra.SimpleGrid w="full" columns={2} gap="2">
              <Chakra.Stat>
                <Chakra.StatLabel>#development</Chakra.StatLabel>
                <Chakra.CircularProgress value={30} py="1">
                  <Chakra.CircularProgressLabel>
                    30%
                  </Chakra.CircularProgressLabel>
                </Chakra.CircularProgress>
                <Chakra.StatHelpText>
                  <Chakra.StatArrow type="increase" />
                  10%
                </Chakra.StatHelpText>
              </Chakra.Stat>

              <Chakra.Stat>
                <Chakra.StatLabel>#design</Chakra.StatLabel>
                <Chakra.CircularProgress value={30} py="1">
                  <Chakra.CircularProgressLabel>
                    30%
                  </Chakra.CircularProgressLabel>
                </Chakra.CircularProgress>
                <Chakra.StatHelpText>
                  <Chakra.StatArrow type="increase" />
                  1%
                </Chakra.StatHelpText>
              </Chakra.Stat>
              <Chakra.Stat>
                <Chakra.StatLabel>#meetings</Chakra.StatLabel>
                <Chakra.CircularProgress value={30} py="1">
                  <Chakra.CircularProgressLabel>
                    10%
                  </Chakra.CircularProgressLabel>
                </Chakra.CircularProgress>
              </Chakra.Stat>
              <Chakra.Stat>
                <Chakra.StatLabel>#studing</Chakra.StatLabel>
                <Chakra.CircularProgress value={30} py="1">
                  <Chakra.CircularProgressLabel>
                    10%
                  </Chakra.CircularProgressLabel>
                </Chakra.CircularProgress>
              </Chakra.Stat>
            </Chakra.SimpleGrid>
            <Chakra.HStack w="full" justify="flex-end">
              <Chakra.Button variant="outline" size="sm">
                Share
              </Chakra.Button>
            </Chakra.HStack>
          </Chakra.VStack>
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.VStack>
  );
};
