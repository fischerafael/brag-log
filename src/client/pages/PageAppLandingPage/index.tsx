import React from "react";
import * as Chakra from "@chakra-ui/react";

const formURL = "https://forms.gle/Lnv7WUThSM5unqXx5";

export const PageAppLandingPage = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
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
          tracker
        </Chakra.Text>
      </Chakra.Text>
      <a target="_blank" href={formURL}>
        <Chakra.Button colorScheme="blue">Entrar</Chakra.Button>
      </a>
    </Chakra.HStack>
  );
};

export const HeroSection = () => {
  return (
    <Chakra.Grid
      minH="70vh"
      w="full"
      maxW="container.md"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
    >
      <Chakra.VStack align="flex-start" justify="center" spacing="8">
        <Chakra.Tag
          colorScheme="blue"
          borderRadius="full"
          fontSize="xs"
          color="blue.500"
        >
          Bem-Vindo ao xptracker
        </Chakra.Tag>
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
          O xptracker é uma plataforma que permite que profissionais de
          tecnologia gerenciem e demonstrem o valor gerado por seu trabalho no
          dia-a-dia para empregadores, pares e recrutadores.
        </Chakra.Text>
        <a target="_blank" href={formURL}>
          <Chakra.Button colorScheme="blue">Demonstrar meu Valor</Chakra.Button>
        </a>
      </Chakra.VStack>

      <Chakra.Grid alignItems="center" justifyItems="center" gap="8">
        <Chakra.Image
          src="/hero-image.svg"
          aria-label="heroImage"
          maxW="350px"
        />
      </Chakra.Grid>
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
    title: "Lembre de suas conquistas",
    subTitle:
      "Mantenha um histórico de todas as tarefas profissionais completadas no dia e o valor gerado por elas",
  },
  {
    id: "2",
    title: "Estatísticas",
    subTitle:
      "Visualize as tarefas - e o valor gerado pelo seu trabalho - ao longo dos dias, semanas e meses.",
  },
  {
    id: "3",
    title: "Prova Social",
    subTitle:
      "Compartilhe seus resultados e conquistas publicamente, demonstre de fato seu valor e avance profissionalmente.",
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

const Footer = () => {
  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      gap="8"
      py="8"
    ></Chakra.Grid>
  );
};
