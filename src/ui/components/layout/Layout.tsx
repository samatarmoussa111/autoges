import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../navigation/Footer";
import Navigation from "../navigation/Navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
}

const Layout = ({ children, isDisplayBreadcrumbs = false }: Props) => {
  return (
    <>
      <Navigation />
      {isDisplayBreadcrumbs && <BreadCrumbs />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
