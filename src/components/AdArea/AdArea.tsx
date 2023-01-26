import { CustomCard } from "@/src/components/AdArea/CustomCard";
import { Container, Grid } from "@mantine/core";

export const AdArea = () => {
  return (
    <div>
      <Container className="mt-10">
        <Grid my="md">
          <Grid.Col lg={12} sm={4}>
            <CustomCard />
          </Grid.Col>
          <Grid.Col lg={12} sm={4}>
            <CustomCard />
          </Grid.Col>
          <Grid.Col lg={12} sm={4}>
            <CustomCard />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
