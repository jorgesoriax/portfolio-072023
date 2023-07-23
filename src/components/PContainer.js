import { Container } from "@chakra-ui/react";

export function PContainer({ children, size }) {
  size =
    size === "md"
      ? "40%"
      : size === "lg"
      ? "70%"
      : size === "full"
      ? "100%"
      : size;

  return (
    <Container maxW={size}>
      {children}
    </Container>
  );
}
