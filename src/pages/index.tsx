import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Le titre de mon application"
        description="Mon super projet pour apprendre Next.js"
      />
      <Layout>
        <h1>homepage</h1>
      </Layout>
    </>
  );
}
