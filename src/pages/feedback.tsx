import Layout from "@theme/Layout";

function Feedback() {
  return (
    <Layout title="Hello">
      <main>
        <div className="container" style={{ height: "90vh", minHeight: "80vh" }}>
          <iframe
            style={{
              backgroundColor: "transparent",
              border: 0,
              height: "80vh",
              minHeight: "70vh !important",
              width: "100%",
            }}
            src="https://localhost:44390/Public/Home/tickets"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}

export default Feedback;
