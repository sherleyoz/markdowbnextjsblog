import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link
      style="text-decoration: none"
      href="/"
      class="logo d-flex align-items-center" passHref
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1>Study4JPSC</h1>
    </Link>
  );
};

export default HeaderLogo;
