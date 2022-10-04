export const Footer = (props: { className?: string }) => {
  return (
    <div
      className={`bg-dark text-center pt-3 pb-3 ${props.className}`}
    >
      <div className="container">
        <a href="https://twitter.com/JADENgygo" className={`link-dark link`}>
          <i className="bi bi-twitter text-light"></i>
        </a>
        <a
          href="https://priconne-portfolio.vercel.app"
          className={`ms-3 link-light link`}
        >
          闇プリン開発室
        </a>
      </div>
      <div>画像 &copy; Cygames, Inc.</div>
    </div>
  );
};
