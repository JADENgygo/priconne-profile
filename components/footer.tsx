export const Footer = (props: { className?: string }) => {
  return (
    <div
      className={`bg-secondary bg-opacity-10 text-center pt-3 pb-3 ${props.className}`}
    >
      <div className="container">
        <a href="https://twitter.com/JADENgygo" className={`link-dark link`}>
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://princess-connect-portfolio.netlify.com"
          className={`ms-3 link-dark link`}
        >
          プリコネツール
        </a>
      </div>
      <div>画像: (C) Cygames, Inc.</div>
    </div>
  );
};
