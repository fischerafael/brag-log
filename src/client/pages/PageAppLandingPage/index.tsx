import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageAppLandingPage = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </TemplateLandingPage>
  );
};

interface TemplateLandingPageProps extends Chakra.GridProps {
  children: React.ReactNode;
}

export const TemplateLandingPage = ({
  children,
  ...props
}: TemplateLandingPageProps) => {
  return (
    <Chakra.Grid
      w="full"
      alignContent="flex-start"
      justifyItems="center"
      minH="100vh"
      px="8"
      gap="0"
      {...props}
    >
      {children}
    </Chakra.Grid>
  );
};

export const Header = () => {
  return (
    <Chakra.HStack
      w="full"
      justify="space-between"
      maxW="container.md"
      h="10vh"
    >
      <Chakra.Text fontWeight="black">
        xp
        <Chakra.Text as="span" color="blue.500">
          log
        </Chakra.Text>
      </Chakra.Text>
      <Chakra.Button colorScheme="blue">Entrar</Chakra.Button>
    </Chakra.HStack>
  );
};

export const HeroSection = () => {
  return (
    <Chakra.Grid
      h="70vh"
      w="full"
      maxW="container.md"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
    >
      <Chakra.VStack align="flex-start" justify="center" spacing="8">
        <Chakra.Text
          fontWeight="bold"
          fontSize="5xl"
          maxW="350px"
          lineHeight="1"
        >
          Demonstre o{" "}
          <Chakra.Text as="span" color="blue.500">
            valor
          </Chakra.Text>{" "}
          do seu trabalho.
        </Chakra.Text>
        <Chakra.Text>
          O xplog é uma plataforma que permite que profissionais de tecnologia
          gerenciem e demonstrem o valor gerado por seu trabalho no dia-a-dia
          para empregadores, pares e recrutadores.
        </Chakra.Text>
        <Chakra.Button colorScheme="blue">Demonstrar meu Valor</Chakra.Button>
      </Chakra.VStack>

      <Chakra.VStack align="flex-start" justify="center" spacing="8">
        <Chakra.Image src="/hero-image.svg" aria-label="heroImage" />
      </Chakra.VStack>
    </Chakra.Grid>
  );
};

interface FeatureCardProps {
  id?: string;
  title: string;
  subTitle: string;
}

export const FeatureCard = ({ title, subTitle }: FeatureCardProps) => {
  return (
    <Chakra.VStack
      w="full"
      p="8"
      align="flex-start"
      border="1px"
      borderColor="gray.300"
      borderRadius="4"
    >
      <Chakra.Text fontWeight="bold">{title}</Chakra.Text>
      <Chakra.Text>{subTitle}</Chakra.Text>
    </Chakra.VStack>
  );
};

const features: FeatureCardProps[] = [
  {
    id: "1",
    title: "Gerencie suas Tarefas",
    subTitle:
      "O xplog não é apenas mais um todo list. Gerencie tarefas completadas no dia e o valor gerado por elas",
  },
  {
    id: "2",
    title: "Estatísticas",
    subTitle:
      "Visualize as tarefas - valor gerado pelo seu trabalho - ao longo dos dias, semanas e meses.",
  },
  {
    id: "3",
    title: "Prova Social",
    subTitle:
      "Compartilhe seus resultados publicamente e demonstre de fato seu valor.",
  },
];

export const FeaturesSection = () => {
  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
      gap="8"
      py="8"
    >
      {features.map((feat) => (
        <FeatureCard
          key={feat.id}
          title={feat.title}
          subTitle={feat.subTitle}
        />
      ))}
    </Chakra.Grid>
  );
};
