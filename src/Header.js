import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import logo from "./images/image2.png";

const DropdownMenu = ({ isBranchPage }) => {
  const menuItems = {
    Branches: {
      Coimbatore: [
        { name: "Hopes", path: "/Medical-Coding-Excellence-at-Hopes" },
        { name: "Saravanampatti", path: "/Top-Medical-Coding-Training-Saravanampatti" },
        { name: "Gandhipuram", path: "/Premier-Medical-Coding-Institute-Gandhipuram" },
      ],
      Kerala: [
        { name: "Kochi", path: "/Medical-Coding-Academy-Kochi" },
        { name: "Trivandrum", path: "/Advanced-Medical-Coding-Tiruvandrum" },
      ],
      Hyderabad: [
        { name: "Ameerpet", path: "/Trusted-Medical-Coding-Ameerpet" },
        { name: "Dilsukhnagar", path: "/Professional-Medical-Coding-Dilsukhnagar" },
      ],
      Tirupati: [{ name: "Tirupati", path: "/Expert-Medical-Coding-Tirupathi" }],
      Trichy: [{ name: "Trichy", path: "/Career-Focused-Medical-Coding-Trichy" }],
      Salem: [{ name: "Salem", path: "/Future-Ready-Medical-Coding-Salem" }],
      Vizag: [{ name: "Vizag", path: "/Innovative-Medical-Coding-Vizag" }],
    },
  };

  const [openMainMenu, setOpenMainMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Branches with no dropdown
  const noDropdown = ["Trichy", "Salem", "Vizag", "Tirupati"];

  return (
    <div className="relative inline-block">
      <div
        className={`cursor-pointer md:!text-cyan-500 py-2 relative transition-all duration-300 hover:text-cyan-400 ${
          isBranchPage() ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
        }`}
        onMouseEnter={() => setOpenMainMenu("Branches")}
        onMouseLeave={() => {
          setOpenMainMenu(null);
          setOpenSubMenu(null);
        }}
      >
        Branches
        {openMainMenu === "Branches" && (
          <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md">
            {Object.keys(menuItems.Branches).map((branch) => {
              const isNoDropdown = noDropdown.includes(branch);

              return (
                <div
                  key={branch}
                  className="relative group px-4 py-2 hover:bg-gray-200"
                  style={{ fontWeight: "500", color: "#000" }}
                  onMouseEnter={() => !isNoDropdown && setOpenSubMenu(branch)}
                  onMouseLeave={() => !isNoDropdown && setOpenSubMenu(null)}
                >
                  {isNoDropdown ? (
                    // Direct link (no dropdown)
                    <Link
                      to={menuItems.Branches[branch][0].path}
                      className="block text-black"
                      style={{ color: "#578fca", fontWeight: "400" }}
                      onClick={() => {
                        setOpenMainMenu(null);
                        setOpenSubMenu(null);
                      }}
                    >
                      {branch}
                    </Link>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        {branch}
                        <span className="ml-2">{">"}</span>
                      </div>

                      {openSubMenu === branch && (
                        <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md">
                          {menuItems.Branches[branch].map((subBranch) => (
                            <Link
                              key={subBranch.name}
                              to={subBranch.path}
                              className="block px-4 py-2 hover:bg-gray-200 text-black"
                              style={{ color: "#578fca", fontWeight: "400" }}
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
                    </>
                  )}
                </div>
              );
            })}
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Check if current page is a branch page
  const isBranchPage = () => {
    const branchPaths = [
      '/kochi', '/trivandrum', '/hyderabad', '/ameerpet', '/dilsukhnagar',
      '/tirupathi', '/trichy', '/salem', '/vizag', 
      '/Medical-Coding-Excellence-at-Hopes', '/Top-Medical-Coding-Training-Saravanampatti', 
      '/Premier-Medical-Coding-Institute-Gandhipuram', '/Medical-Coding-Academy-Kochi',
      '/Advanced-Medical-Coding-Tiruvandrum', '/Trusted-Medical-Coding-Ameerpet',
      '/Professional-Medical-Coding-Dilsukhnagar', '/Expert-Medical-Coding-Tirupathi',
      '/Career-Focused-Medical-Coding-Trichy', '/Future-Ready-Medical-Coding-Salem',
      '/Innovative-Medical-Coding-Vizag'
    ];
    return branchPaths.includes(location.pathname);
  };
  
  // Check if current page is a course page
  const isCoursePage = () => {
    const coursePaths = [
      '/cpc', '/cic', '/coc', '/cpma', '/crc', '/cpb', '/cedc', '/cemc', 
      '/cdeo', '/cdei', '/cppm', '/surgery', '/ed', '/em', '/radiology', 
      '/anesthesia', '/ip-drg', '/hcc', '/ivr', '/ccs', '/ccs-p', '/rhia', 
      '/rhit', '/ccc', '/him'
    ];
    return coursePaths.includes(location.pathname);
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
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
          { label: "Hopes", path: "/Medical-Coding-Excellence-at-Hopes" },
          { label: "Saravanampatti ", path: "/Top-Medical-Coding-Training-Saravanampatti" },
          { label: "Gandhipuram", path: "/Premier-Medical-Coding-Institute-Gandhipuram" },
        ],
      },
      {
        label: "KERALA",
        courseMenu: [
          { label: "Kochi", path: "/Medical-Coding-Academy-Kochi" },
          { label: "Thiruvananthapuram", path: "/Advanced-Medical-Coding-Tiruvandrum" },
        ],
      },
      {
        label: "HYDERABAD",
        courseMenu: [
          { label: "Ameerpet", path: "/Trusted-Medical-Coding-Ameerpet" },
          { label: "Dilsukhnagar", path: "/Professional-Medical-Coding-Dilsukhnagar" },
        ],
      },
      {
        label: "OTHER LOCATIONS",
        courseMenu: [
          { label: "Tirupathi", path: "/Expert-Medical-Coding-Tirupathi" },
          { label: "Trichy", path: "/Career-Focused-Medical-Coding-Trichy" },
          { label: "Salem", path: "/Future-Ready-Medical-Coding-Salem" },
          { label: "Vizag", path: "/Innovative-Medical-Coding-Vizag" },
        ],
      },
    ],
  };
 
  return (
    <>
      <header className={` ${isHome ? 'glass-header' : 'glass-header'}`}>
        <nav className="navbar ">
          {/* Logo */}
          

          {/* Hamburger Menu - Only show on mobile/tablet */}
          {isMobile && (
            <div className="hamburger-menu">
              <div
                className="hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                ☰
              </div>
            </div>
          )}

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
                width: "100%",
              }}
              className={` ${isHome ? 'w-full' : 'w-full'}`}
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
                    <Link 
                      to="/" 
                      className={`text-cyan-500 relative transition-all duration-300 hover:text-cyan-400 ${
                        location.pathname === '/' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
                      }`}
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                    className="py-2 whitespace-nowrap"
                  >
                    <Link 
                      to="/about" 
                      className={`text-cyan-500 relative transition-all duration-300 hover:text-cyan-400 ${
                        location.pathname === '/about' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
                      }`}
                    >
                      About us
                    </Link>
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
                    className={`py-2 whitespace-nowrap text-cyan-500 relative transition-all duration-300 hover:text-cyan-400 ${
                      isCoursePage() ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
                    }`}
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
                               className="text-center text-cyan-500"
                              style={{ 
                                color: "#06b6d4",
                                position: "relative",
                                transition: "color 0.3s ease",
                                display: "inline-block"
                              }}
                              key={i}
                              to={course.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setSubmenuOpen("");
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.color = "#0891b2";
                                const underline = e.target.querySelector('.mobile-course-underline');
                                if (underline) underline.style.width = '100%';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.color = "#06b6d4";
                                const underline = e.target.querySelector('.mobile-course-underline');
                                if (underline) underline.style.width = '0%';
                              }}
                            >
                              {course.label}
                              <div className="mobile-course-underline" style={{
                                position: 'absolute',
                                bottom: '-2px',
                                left: '0',
                                width: '0%',
                                height: '1px',
                                backgroundColor: '#0891b2',
                                transition: 'width 0.3s ease'
                              }}></div>
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
                    <DropdownMenu isBranchPage={isBranchPage}/>
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
                    className={`py-2 text-cyan-500 relative transition-all duration-300 hover:text-cyan-400 ${
                      isBranchPage() ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
                    }`}
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
                               style={{ color: "#06b6d4" }}
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
                    <Link 
                      to="/ourteam" 
                      className={`text-cyan-500 relative transition-all duration-300 hover:text-cyan-400 ${
                        location.pathname === '/ourteam' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
                      }`}
                    >
                      Our team
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onMouseEnter={() => setOpen({ submenu: "", open: false })}
                    className="py-2 whitespace-nowrap"
                  >
                    <Link 
                      to="/contact" 
                      className={`text-cyan-500 relative transition-all duration-300 hover:text-cyan-400 ${
                        location.pathname === '/contact' ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300' : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:transition-all hover:after:duration-300'
                      }`}
                    >
                      Contact us
                    </Link>
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
                              position: "relative",
                              transition: "color 0.3s ease",
                              display: "inline-block"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#06b6d4";
                              const underline = e.target.querySelector('.course-underline');
                              if (underline) underline.style.width = '100%';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#505050";
                              const underline = e.target.querySelector('.course-underline');
                              if (underline) underline.style.width = '0%';
                            }}
                          >
                            {branch.label}
                            <div className="course-underline" style={{
                              position: 'absolute',
                              bottom: '-2px',
                              left: '0',
                              width: '0%',
                              height: '1px',
                              backgroundColor: '#06b6d4',
                              transition: 'width 0.3s ease'
                            }}></div>
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