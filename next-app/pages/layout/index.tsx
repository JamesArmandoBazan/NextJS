import Link from "next/link";
import Head from "next/head";
import Navigation from "../navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Simple Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      {children}
    </div>
  );
};

export default Layout;
