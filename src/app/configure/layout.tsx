import Container from "@/components/Container";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Container className="flex flex-1 flex-col">{children}</Container>;
};

export default Layout;
