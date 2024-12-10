import React from 'react';

function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', textAlign: 'center' }}>
        <h2>Carousel Placeholder</h2>
        <p>Replace this with an actual carousel later</p>
      </div>

      {/* Static Words Section */}
      <section style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', color: '#0066cc' }}>Empowering Young Women & Girls</h2>
        <p style={{ textAlign: 'center', color: '#333' }}>
          Through financial inclusion, we aim to spread awareness and prevent erroneous information.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '2rem'
        }}>
          <div style={{ width: '30%', textAlign: 'center', padding: '1rem', border: '1px solid #ccc' }}>
            <h3>Credit Information Sharing</h3>
            <p>Credit Information Sharing (CIS) is a process where credit providers (such as banks, microfinance institutions, saccos, etc.)</p>
          </div>
          <div style={{ width: '30%', textAlign: 'center', padding: '1rem', border: '1px solid #ccc' }}>
            <h3>Dispute Resolution</h3>
            <p>Credit Information Sharing (CIS) is a risk management tool through which financial institutions may justifiably divulge information about their customers without breaching their duty of confidentiality.</p>
          </div>
          <div style={{ width: '30%', textAlign: 'center', padding: '1rem', border: '1px solid #ccc' }}>
            <h3>Access Resources</h3>
            <p>CIS Kenya allows you to access tones of publications and reports on matters of Credit Information Sharing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
