import Header from "../components/Header";

function LayoutPage({ children }) {
  return (
    <div>
        <Header />
        {children}
    </div>
  );
}

export default LayoutPage;