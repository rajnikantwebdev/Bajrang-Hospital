// import { Link } from 'react-router-dom';
import React from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function StcikyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="sm:bg-transparent bg-white right-0 md:static absolute w-full px-4 py-4  mt-5 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <a
          href="/ourwork"
          className="flex items-center hover:text-gray-600 text-black font-redhat text-xl tracking-widest"
        >
          Our Work
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/booknow"
          className="flex items-center hover:text-gray-600 text-black font-redhat text-xl tracking-widest"
        >
          Book Now
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/about"
          className="flex items-center hover:text-gray-600 text-black font-redhat text-xl tracking-widest"
        >
          About
        </a>
      </Typography>

      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/team"
          className="flex items-center hover:text-gray-600 text-black font-redhat text-xl tracking-widest"
        >
          Team
        </a>
      </Typography> */}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/map"
          className="flex items-center hover:text-gray-600 text-black font-redhat text-xl tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg> +91-999-999999

        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 bg-white bg-opacity-100 shadow-none border-2 backdrop-blur-none backdrop-saturate-0 border-white z-[999] h-[10vh] max-w-full rounded-none px-0 pr-6">
      <div className="w-full  flex items-center justify-between h-full">
        <a href={"/"} className="flex">
          <img
            src={""}
            alt="Bajrang Hopital"
            className="h-12 mr-2 md:ml-8 ml-4"
          />

          <Typography
            as="a"
            href="#"
            className="text-black cursor-pointer py-1.5 self-center text-2xl font-bold whitespace-nowrap font-redhat"
          >
            Bajrang Hospital
          </Typography>
        </a>

        <div className="flex items-center gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
