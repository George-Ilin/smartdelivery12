function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container-footer">
        <div className="social-media">
          <a href="">
            <img src="/assets/linkedin.svg" alt="facebook" />
          </a>
        </div>
        <div className="paragraf-footer">
          <p>Copyright &copy; Rent a delivery car {footerYear}</p>
        </div>

        <span>
          <a href="">Ilin George</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
