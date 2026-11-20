import Solutions from "../sections/Solutions";
import SoftwareShowcase from "../sections/SoftwareShowcase";

function SolutionsPage() {
  return (
    <>
      <section className="page-section">
        <h1>Our Software Solutions</h1>
        <p>Explore our business software solutions.</p>
      </section>

      <Solutions />
      <SoftwareShowcase />
    </>
  );
}

export default SolutionsPage;