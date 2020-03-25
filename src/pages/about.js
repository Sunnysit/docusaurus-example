import React from 'react';
import Layout from '@theme/Layout';

const about = () => {
    return (
        <Layout title="About">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
          }}>
          <p>
           This is about page.
          </p>
        </div>
      </Layout>
    )
}

export default about
