import { CustomCard } from "@/src/components/AdArea/CustomCard";
import { Container, Grid } from "@mantine/core";

export const AdArea = () => {
  return (
    <div>
      <Container className="mt-10">
        <Grid my="md">
          <Grid.Col md={6} lg={4}>
            <CustomCard />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <CustomCard />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <CustomCard />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
