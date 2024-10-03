import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: `"nav nav"
                        "side main"`,
        }}
        gap="2"
      >
        <GridItem area="nav" bg="tomato">
          Header
        </GridItem>
        <Show above="lg">
          <GridItem area="side" bg="blue.100">
            Side Navigation
          </GridItem>
        </Show>

        <GridItem area="main" bg="blue.300">
          Main Content
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
