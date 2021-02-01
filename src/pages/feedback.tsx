import Layout from "@theme/Layout";
import React from "react";

function Feedback() {
  return (
    <Layout title="Hello">
      <main>
        <div
          className="container"
          style={{ height: "90vh", minHeight: "80vh" }}
        >
          <iframe
            style={{
              width: "100%",
              height: "80vh",
              minHeight: "70vh !important",
              backgroundColor: "transparent",
              border: 0,
            }}
            src="https://localhost:44390/Public/Home/tickets"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}

export default Feedback;
