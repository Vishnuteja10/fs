const Footer2 = () => {
    return (
      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 40px', marginTop: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Newsletter Section */}
          <div style={{ flex: '1 1 100%', marginBottom: '20px' }}>
            <h3>Join our newsletter to keep up to date with us!</h3>
            <div style={{ display: 'flex', maxWidth: '400px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{ padding: '10px', flexGrow: 1, border: '1px solid #ccc', borderRadius: '4px 0 0 4px' }}
              />
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#002D62',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0 4px 4px 0',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
  
          <hr style={{ width: '100%', marginBottom: '20px', borderTop: '1px solid #ddd' }} />
  
          {/* Footer Content */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
            {/* Company Info */}
            <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
              <h4>Fracspace</h4>
              <p>
                Fracspace offers innovative fractional investment opportunities, allowing you to own a share of luxury
                properties and unique real estate projects. Explore our platform to discover how you can invest smartly
                and enjoy exclusive benefits.
              </p>
              <div>
                <strong>Follow us at</strong>
                <div style={{ display: 'flex', marginTop: '10px' }}>
                  <a href="#" style={{ marginRight: '10px' }}><img src="path/to/instagram-icon.png" alt="Instagram" /></a>
                  <a href="#" style={{ marginRight: '10px' }}><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
                  <a href="#" style={{ marginRight: '10px' }}><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
                  <a href="#"><img src="path/to/youtube-icon.png" alt="YouTube" /></a>
                </div>
              </div>
            </div>
  
            {/* Quick Links */}
            <div style={{ flex: '1 1 150px', marginBottom: '20px' }}>
              <h4>Quick Links</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Property</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
              <h4>Contact Info</h4>
              <p>504 D, 5th Floor, RK Residency Road No.11, Banjara Hills, Hyderabad 500034.</p>
              <p>Email: <a href="mailto:support@fracspace.com">support@fracspace.com</a></p>
              <p>Phone: +91 93555 65604</p>
            </div>
  
            {/* App Links */}
            <div style={{ flex: '1 1 150px', marginBottom: '20px' }}>
              <h4>Get the App</h4>
              <div>
                <a href="#"><img src="path/to/ios-app-icon.png" alt="iOS" style={{ marginRight: '10px' }} /></a>
                <a href="#"><img src="path/to/android-app-icon.png" alt="Android" /></a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#6c757d' }}>
          <p>© 2024 <strong>Fracspace</strong>. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer2;