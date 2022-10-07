export const Footer = (props: { className?: string }) => {
  return (
    <div
      className={`text-center pt-3 pb-3 ${props.className}`}
    >
      <div className="container">
        <a href="https://twitter.com/JADENgygo">
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://priconne-portfolio.vercel.app"
          className={`ms-3 link`}
        >
          闇プリン開発室
        </a>
      </div>
      <div>画像 &copy; Cygames, Inc.</div>
    </div>
  );
};
