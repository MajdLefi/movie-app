import React from "react";
import Dynamic from "next/dynamic";
import Box from "@mui/material/Box";

const Header = Dynamic(() => import("./header"), { ssr: false });
const Footer = Dynamic(() => import("./footer"), { ssr: false });

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
        <main>{children}</main>
      <Footer/>
    </Box>
  );
}
