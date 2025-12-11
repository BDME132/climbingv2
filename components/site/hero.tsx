import { Section, Container, Prose } from "@/components/ds";
import { Logo } from "@/components/site/logo";

export const Hero = () => {
  return (
    <Section className="bg-muted/50 border-b">
      <Container className="grid gap-6">
        <Logo width={24} />
        <Prose isSpaced>
          <h1>Rock Climb Utah</h1>
          <p>
            Your guide to rock climbing in Utah.
          </p>
        </Prose>
      </Container>
    </Section>
  );
};
