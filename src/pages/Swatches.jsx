import React from "react";
import styled from "styled-components";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { colors } from "../colors.js";
function Swatches() {
  return (
    <Container padding="50" bg="#F1F5FC">
      <SimpleGrid minChildWidth="150px" spacing="40px">
        {colors.map((color, index) => (
          <Box borderRadius="5" bg="white" padding="10">
            <Box key={color.hex} bg={color.hex} height="120px"></Box>
            <Box
              mt="1"
              lineHeight="tight"
              isTruncated
              textAlign="center"
              autoCapitalize="true"
            >
              {color.name}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Swatches;
// const StyledBox = styled(Box)`
//   color: white;
//   display: none;
//   &:hover {
//     background: red;
//     display: block;
//   }
// `;
