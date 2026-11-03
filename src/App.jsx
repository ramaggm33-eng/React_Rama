import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '40px' }}>
      <header>
        <h1>Halo, Selamat Datang di Web React </h1>
        <h1>Rama Adyatama!</h1>
        <p>Project pertama menggunakan React dan Vite.</p>
      </header>

      <main style={{ marginTop: '30px' }}>
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <h2>Profil Singkat</h2>
          <p>Status: Sedang belajar dasar React & Git workflow.</p>
          <button 
            onClick={() => setLikes(likes + 1)}
            style={{
              padding: '10px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Beri Dukungan ({likes})
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;