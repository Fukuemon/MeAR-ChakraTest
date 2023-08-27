import { Box, Flex } from "./components";
import { DynamicModelViewer } from "./components/ModelViewer/DynamicModel";

export default function Home() {
  return (
    <Box>
      <DynamicModelViewer src="/4ステーキコンボ.glb" />
    </Box>
  );
}
