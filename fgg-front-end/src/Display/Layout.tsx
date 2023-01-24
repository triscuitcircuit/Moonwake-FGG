// @ts-ignore
import { Box } from "./Box";
// @ts-ignore
export const Layout = ({ children }) => {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      {children}
    </Box>
  );
};
