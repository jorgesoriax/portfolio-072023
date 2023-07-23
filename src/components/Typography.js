import { Heading, Text } from "@chakra-ui/react";

export function Display({ children }) {
  return (
    <Heading as="h1" size="2xl" fontWeight="bold" mb="4" color="blackcharade">
      {children}
    </Heading>
  );
}
export function Title({ children }) {
  return (
    <Heading as="h2" size="xl" fontWeight="bold" color="blackcharade">
      {children}
    </Heading>
  );
}
export function Subtitle({ children }) {
  return (
    <Heading as="h3" size="lg" fontWeight="bold" color="blackcharade">
      {children}
    </Heading>
  );
}
export function Paragraph({ children }) {
  return <Text fontSize="xl" color="graytrout">{children}</Text>;
}
export function Label({ children }) {
  return <Text fontSize="xl" color="graytrout">{children}</Text>;
}
