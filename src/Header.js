import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import logo from "./images/image2.png";


const DropdownMenu = () => {
  const menuItems = {
    Branches: {
      Coimbatore: [
        { name: "Hopes", path: "/hopes" },
        { name: "Saravanampatti", path: "/saravanampatti" },
        { name: "Gandhipuram", path: "/gandhipuram" }
      ],
      Kerala: [
        { name: "Kochi", path: "/kochi" },
        { name: "Trivandrum", path: "/trivandrum" }
      ],
      Hyderabad: [
        { name: "Ameerpet", path: "/ameerpet" },
        { name: "Dilsukhnagar", path: "/dilsukhnagar" }
      ],
      OtherLocations: [
        { name: "Tirupati", path: "/tirupati" },
        { name: "Trichy", path: "/trichy" },
        { name: "Salem", path: "/salem" }
      ],
    },
  };
  const [openMainMenu, setOpenMainMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer md:!text-white py-2 "
        onMouseEnter={() => setOpenMainMenu("Branches")}
        onMouseLeave={() => setOpenMainMenu(null)}
    
      >
        Branches
        {openMainMenu === "Branches" && (
          <div className="absolute left-0 mt-2 w-48  bg-white shadow-lg rounded-md">
            {Object.keys(menuItems.Branches).map((branch) => (
              <div
                key={branch}
                className="relative group px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onMouseEnter={() => setOpenSubMenu(branch)}
                onMouseLeave={() => setOpenSubMenu(null)}
                style={{ fontWeight: "500", cursor: "pointer" ,color:"#000"}}
              >
                {branch}
                {openSubMenu === branch && (
                  <div className="absolute left-full top-0 mt-0 w-48   bg-white shadow-lg rounded-md">
                    {menuItems.Branches[branch].map((subBranch) => (
                      <Link 
                        key={subBranch.name}
                        to={subBranch.path}
                        className="block px-4 py-2 hover:bg-gray-200 text-black" 
                        style={{ color: "#578fca",fontWeight:"400"}}
                        onClick={() => {
                          setOpenMainMenu(null);
                          setOpenSubMenu(null);
                        }}
                      >
                        {subBranch.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState({ submenu: "", open: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(""); // Track which submenu is open
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();
  const isHome = location.pathname === '/';
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setOpen({ submenu: "", open: false });
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    setOpen({ submenu: "", open: false });
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [mobileMenuOpen]);

  const submenu = {
    courses: [
      {
        label: "AAPC",
        courseMenu: [
          { label: "CPC", path: "/cpc" },
          { label: "CIC", path: "/cic" },
          { label: "COC", path: "/coc" },
          { label: "CPMA", path: "/cpma" },
          { label: "CRC", path: "/crc" },
          { label: "CPB", path: "/cpb" },
          { label: "CEDC", path: "/cedc" },
          { label: "CEMC", path: "/cemc" },
          { label: "CDEO", path: "/cdeo" },
          { label: "CDEI", path: "/cdei" },
          { label: "CPPM", path: "/cppm" },
        ],
      },
      {
        label: "SPECIALTY TRAINING",
        courseMenu: [
          { label: "SURGERY", path: "/surgery" },
          { label: "ED", path: "/ed" },
          { label: "EM", path: "/em" },
          { label: "RADIOLOGY", path: "/radiology" },
          { label: "ANESESTHESIA", path: "/Anesesthesia" },
          { label: "IP DRG", path: "/ip-drg" },
          { label: "HCC", path: "/hcc" },
          { label: "IVR", path: "/ivr" },
        ],
      },
      {
        label: "AHIMA",
        courseMenu: [
          { label: "CCS", path: "/ccs" },
          { label: "CCS-P", path: "/ccs-p" },
          { label: "RHIA", path: "/rhia" },
          { label: "RHIT", path: "/rhit" },
        ],
      },
      {
        label: "HIMAA",
        courseMenu: [
          { label: "CCC", path: "/ccc" },
          { label: "HIM", path: "/him" },
        ],
      },
    ],
    branches: [
      {
        label: "COIMBATORE",
        courseMenu: [
          { label: "Saravanampatti", path: "/saravanampatti" },
          { label: "Hopes", path: "/hopes" },
          { label: "Gandhipuram", path: "/gandhipuram" },
        ],
      },
      {
        label: "KERALA",
        courseMenu: [
          { label: "Kochi", path: "/kochi" },
          { label: "Thiruvananthapuram", path: "/trivandrum" },
        ],
      },
      {
        label: "HYDERABAD",
        courseMenu: [
          { label: "Ameerpet", path: "/ameerpet" },
          { label: "Dilsukhnagar", path: "/dilsukhnagar" },
        ],
      },
      {
        label: "OTHER LOCATIONS",
        courseMenu: [
          { label: "Tirupathi", path: "/tirupathi" },
          { label: "Trichy", path: "/trichy" },
          { label: "Salem", path: "/salem" },
        ],
      },
    ],
  };
 
  return (
    <>
      <header className={` ${isHome ? 'glass-header' : 'glass-header'}`}>
        <nav className="navbar ">
          {/* Logo */}
          

          {/* Hamburger Menu */}
          <div className="hamburger-menu">
            <div
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </div>
          </div>

          {/* Navigation Menu */}
          <div
            className="App"
            onMouseLeave={() => setOpen({ submenu: "", open: false })}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6%",
                height: "auto",
              }}
              className={` ${isHome ? 'w-full md:bg-gray-500 md:rounded-md md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-40 md:border md:border-gray-100' :  'w-full md:bg-gray-500 md:rounded-md md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-40 md:border md:border-gray-100'}`}
            >
              <div className="logo">
            <a href="/">
              <img src={logo} alt="Website Logo"  />
            </a>
          </div>
              <ul
                className={`border-gray-300  sm:shadow md:shadow-none  menu ${
                  mobileMenuOpen ? "open" : ""
                }`}
              >
                
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                    className="py-2 whitespace-nowrap"
                  >
                    <Link to="/" className="md:!text-white">Home</Link>
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                    className="py-2 whitespace-nowrap"
                  >
                    <Link to="/about" className="md:!text-white">About us</Link>
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() =>
                      !isMobile && setOpen({ submenu: "courses", open: true })
                    }
                    onClick={() =>
                      isMobile &&
                      setSubmenuOpen(submenuOpen === "courses" ? "" : "courses")
                    }
                    className="py-2 whitespace-nowrap md:!text-white"
                  >
                    Courses
                  </div>
                  {submenuOpen === "courses" && (
                    <div className="mobile-submenu overflow-scroll text-center border-gray-300 shadow rounded">
                      {submenu.courses.map((item, index) => (
                        <div key={index}>
                          <div style={{ fontWeight: 500, marginTop: "10px" }}>
                            {item.label}
                          </div>
                          {item.courseMenu.map((course, i) => (
                            <Link
                              className=" text-center md:!text-white"
                              style={{ color: "#578fca" }}
                              key={i}
                              to={course.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setSubmenuOpen("");
                              }}
                            >
                              {course.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
                <li className="multiple-dropdown">
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                  >
                    <DropdownMenu/>
                  </div>
                </li>
                <li className="multiple-dropdown-sub">
                  
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer", }}
                    onMouseEnter={() =>
                      !isMobile && setOpen({ submenu: "branches", open: true })
                    }
                    onClick={() =>
                      isMobile &&
                      setSubmenuOpen(
                        submenuOpen === "branches" ? "" : "branches"
                      )
                    }
                    className="py-2 !md:!text-white"mobcolor  
                  >
                    Branches
                  </div>
                  {submenuOpen === "branches" && (
                    <div className="mobile-submenu text-center border-gray-300 shadow rounded">
                      {submenu.branches.map((item, index) => (
                        <div key={index}>
                          <div
                            style={{
                              fontWeight: 500,
                              marginTop: "10px",
                              color: "#000",
                            }}
                          >
                            {item.label}
                          </div>
                          {item.courseMenu.map((branch, i) => (
                            <Link
                              style={{ color: "#578fca" }}
                              key={i}
                              to={branch.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setSubmenuOpen("");
                              }}
                            >
                              {branch.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                    className="py-2 whitespace-nowrap"
                  >
                    <Link to="/ourteam" className="md:!text-white">Our team</Link>
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                    className="py-2 whitespace-nowrap"
                  >
                    <Link to="/contact" className="md:!text-white">Contact us</Link>
                  </div>
                </li>
                
              </ul>
            </div>

            {/* Submenu */}
            {open.open && (
              <div
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "auto",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  color: "black",
                  width: open.submenu === "branches" ? "50%" : "50%",
                  gap: "10%",
                  padding: "20px",
                  borderTop: "1px solid #ddd",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  fontSize: "0.9rem",
                }}
              >
                {submenu[open.submenu]?.map((item, index) => (
                  <div
                    key={index}
                    style={{ margin: "10px", textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.courseMenu &&
                      item.courseMenu.map((branch, i) => (
                        <div
                          key={i}
                          style={{ padding: "5px 0", fontSize: "0.85rem" }}
                        >
                          <Link
                            to={branch.path}
                            style={{
                              color: "#505050",
                              textDecoration: "none",
                              marginTop: "10px",
                            }}
                          >
                            {branch.label}
                          </Link>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>

        </nav>
      </header>
      
        
      
    </>
  );
};

export default Header;
