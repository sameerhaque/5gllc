import { Box } from "@chakra-ui/react";
import Cesium from "cesium";
import { Viewer } from "resium";
import "./search.css";

Cesium.Ion.defaultAccessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNDc1ZjQwMS1hOGI2LTQyNmUtYmYxMi1jODlhNDNlMjViZTkiLCJpZCI6NDc4OSwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MTYyNTg3OX0.mNoGLdYuwqsnRRkQtdYNMbJfMBoZF2hPkbc4SRVVqNw`;

const CarrierSearch = () => {
  return (
    <Box h="100vh">
      <Viewer
        full
        homeButton={false}
        navigationHelpButton={false}
        sceneModePicker={false}
        timeline={false}
        fullscreenButton={false}
        animation={false}
      />
    </Box>
  );
};

export default CarrierSearch;
