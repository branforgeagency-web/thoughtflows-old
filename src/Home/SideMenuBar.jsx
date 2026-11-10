import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideMenuBar.css';

const SideMenuBar = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState('branches'); // 'branches' or 'courses'
  const [openHubs, setOpenHubs] = useState({
    coimbatore: true, // Opened by default so user immediately sees Coimbatore hub + Hopes, Gandhipuram, SVM!
    kerala: false,
    hyderabad: false,
    maharashtra: false,
  });

  // Toggle specific branch hub (Coimbatore, Kerala, etc.)
  const toggleHub = (hub) => {
    setOpenHubs((prev) => ({ ...prev, [hub]: !prev[hub] }));
  };

  // Lock scroll & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`side-menu-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className={`side-menu-drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Navigation Menu"
        aria-modal={isOpen}
      >
        {/* Header */}
        <div className="side-menu-header">
          <div className="side-menu-brand-wrap">
            <span className="side-menu-brand">THOUGHTFLOWS</span>
            <span className="side-menu-brand-sub">Medical Coding Academy</span>
          </div>
          <button
            type="button"
            className="side-menu-close-btn"
            onClick={onClose}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* Body Navigation */}
        <div className="side-menu-body">
          <ul className="side-nav-list">
            {/* Home */}
            <li className="side-nav-item">
              <Link to="/" className="side-nav-link" onClick={handleLinkClick}>
                <span>Home</span>
              </Link>
            </li>

            {/* About Us */}
            <li className="side-nav-item">
              <Link to="/about" className="side-nav-link" onClick={handleLinkClick}>
                <span>About Us</span>
              </Link>
            </li>

            {/* Branches Accordion */}
            <li
              className={`side-nav-item ${
                expandedSection === 'branches' ? 'is-expanded' : ''
              }`}
            >
              <button
                type="button"
                className="side-nav-link"
                onClick={() =>
                  setExpandedSection(
                    expandedSection === 'branches' ? null : 'branches'
                  )
                }
              >
                <span>Branches & Locations</span>
                <span className="side-nav-arrow">▶</span>
              </button>

              {expandedSection === 'branches' && (
                <div className="side-accordion-content">
                  {/* COIMBATORE HUB & INDIVIDUAL LANDING PAGES */}
                  <div
                    className={`side-hub-card ${
                      openHubs.coimbatore ? 'is-open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="side-hub-trigger"
                      onClick={() => toggleHub('coimbatore')}
                    >
                      <span>📍 Coimbatore Branches</span>
                      <span className="side-hub-arrow">▶</span>
                    </button>

                    {openHubs.coimbatore && (
                      <ul className="side-hub-sublinks">
                        <li>
                          <Link
                            to="/coimbatore"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Coimbatore Landing Hub</span>
                            <span className="side-badge-hub">Hub Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Medical-Coding-Excellence-at-Hopes"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Hopes Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Premier-Medical-Coding-Institute-Gandhipuram"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Gandhipuram Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Top-Medical-Coding-Training-Saravanampatti"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>SVM (Saravanampatti)</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* KERALA HUB & BRANCHES */}
                  <div
                    className={`side-hub-card ${
                      openHubs.kerala ? 'is-open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="side-hub-trigger"
                      onClick={() => toggleHub('kerala')}
                    >
                      <span>📍 Kerala Branches</span>
                      <span className="side-hub-arrow">▶</span>
                    </button>

                    {openHubs.kerala && (
                      <ul className="side-hub-sublinks">
                        <li>
                          <Link
                            to="/kerala"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Kerala Landing Hub</span>
                            <span className="side-badge-hub">Hub Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Medical-Coding-Academy-Kochi"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Kochi Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Advanced-Medical-Coding-Tiruvandrum"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Trivandrum Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* HYDERABAD HUB & BRANCHES */}
                  <div
                    className={`side-hub-card ${
                      openHubs.hyderabad ? 'is-open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="side-hub-trigger"
                      onClick={() => toggleHub('hyderabad')}
                    >
                      <span>📍 Hyderabad Branches</span>
                      <span className="side-hub-arrow">▶</span>
                    </button>

                    {openHubs.hyderabad && (
                      <ul className="side-hub-sublinks">
                        <li>
                          <Link
                            to="/hyderabad"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Hyderabad Landing Hub</span>
                            <span className="side-badge-hub">Hub Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Trusted-Medical-Coding-Ameerpet"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Ameerpet Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Professional-Medical-Coding-Dilsukhnagar"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Dilsukhnagar Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* MAHARASHTRA HUB & BRANCHES */}
                  <div
                    className={`side-hub-card ${
                      openHubs.maharashtra ? 'is-open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="side-hub-trigger"
                      onClick={() => toggleHub('maharashtra')}
                    >
                      <span>📍 Maharashtra Branches</span>
                      <span className="side-hub-arrow">▶</span>
                    </button>

                    {openHubs.maharashtra && (
                      <ul className="side-hub-sublinks">
                        <li>
                          <Link
                            to="/maharashtra"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Maharashtra Landing Hub</span>
                            <span className="side-badge-hub">Hub Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/medical-coding-course-pune/"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Pune Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Medical-Coding-Training-Kolhapur"
                            className="side-sublink"
                            onClick={handleLinkClick}
                          >
                            <span>Kolhapur Branch</span>
                            <span className="side-badge-branch">Landing Page</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* STANDALONE BRANCHES */}
                  <div className="side-standalone-branches">
                    <span className="side-standalone-title">
                      Other Regional Branches
                    </span>
                    <div className="side-branch-pill-grid">
                      <Link
                        to="/Career-Focused-Medical-Coding-Trichy"
                        className="side-branch-pill"
                        onClick={handleLinkClick}
                      >
                        Trichy
                      </Link>
                      <Link
                        to="/Future-Ready-Medical-Coding-Salem"
                        className="side-branch-pill"
                        onClick={handleLinkClick}
                      >
                        Salem
                      </Link>
                      <Link
                        to="/medical-coding-course-theni"
                        className="side-branch-pill"
                        onClick={handleLinkClick}
                      >
                        Theni
                      </Link>
                      <Link
                        to="/Innovative-Medical-Coding-Vizag"
                        className="side-branch-pill"
                        onClick={handleLinkClick}
                      >
                        Vizag
                      </Link>
                      <Link
                        to="/Expert-Medical-Coding-Tirupathi"
                        className="side-branch-pill"
                        onClick={handleLinkClick}
                      >
                        Tirupati
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Courses Accordion */}
            <li
              className={`side-nav-item ${
                expandedSection === 'courses' ? 'is-expanded' : ''
              }`}
            >
              <button
                type="button"
                className="side-nav-link"
                onClick={() =>
                  setExpandedSection(
                    expandedSection === 'courses' ? null : 'courses'
                  )
                }
              >
                <span>Medical Coding Courses</span>
                <span className="side-nav-arrow">▶</span>
              </button>

              {expandedSection === 'courses' && (
                <div className="side-courses-columns-wrap">
                  {/* AAPC */}
                  <div className="side-course-col">
                    <div className="side-course-col-header">
                      <span className="side-course-col-title">AAPC</span>
                      <div className="side-course-col-line" />
                    </div>
                    <ul className="side-course-col-list">
                      <li><Link to="/cpc" className="side-course-col-link" onClick={handleLinkClick}>CPC</Link></li>
                      <li><Link to="/cic" className="side-course-col-link" onClick={handleLinkClick}>CIC</Link></li>
                      <li><Link to="/cpma" className="side-course-col-link" onClick={handleLinkClick}>CPMA</Link></li>
                      <li><Link to="/coc" className="side-course-col-link" onClick={handleLinkClick}>COC</Link></li>
                      <li><Link to="/crc" className="side-course-col-link" onClick={handleLinkClick}>CRC</Link></li>
                      <li><Link to="/cpb" className="side-course-col-link" onClick={handleLinkClick}>CPB</Link></li>
                      <li><Link to="/cedc" className="side-course-col-link" onClick={handleLinkClick}>CEDC</Link></li>
                      <li><Link to="/cemc" className="side-course-col-link" onClick={handleLinkClick}>CEMC</Link></li>
                      <li><Link to="/cdeo" className="side-course-col-link" onClick={handleLinkClick}>CDEO</Link></li>
                      <li><Link to="/cdei" className="side-course-col-link" onClick={handleLinkClick}>CDEI</Link></li>
                      <li><Link to="/cppm" className="side-course-col-link" onClick={handleLinkClick}>CPPM</Link></li>
                    </ul>
                  </div>

                  {/* Speciality */}
                  <div className="side-course-col">
                    <div className="side-course-col-header">
                      <span className="side-course-col-title">Speciality</span>
                      <div className="side-course-col-line" />
                    </div>
                    <ul className="side-course-col-list">
                      <li><Link to="/surgery" className="side-course-col-link" onClick={handleLinkClick}>Surgery</Link></li>
                      <li><Link to="/ed" className="side-course-col-link" onClick={handleLinkClick}>ED</Link></li>
                      <li><Link to="/em" className="side-course-col-link" onClick={handleLinkClick}>EM</Link></li>
                      <li><Link to="/radiology" className="side-course-col-link" onClick={handleLinkClick}>Radiology</Link></li>
                      <li><Link to="/anesesthesia" className="side-course-col-link" onClick={handleLinkClick}>Anesthesia</Link></li>
                      <li><Link to="/ip-drg" className="side-course-col-link" onClick={handleLinkClick}>IP DRG</Link></li>
                      <li><Link to="/hcc" className="side-course-col-link" onClick={handleLinkClick}>HCC</Link></li>
                      <li><Link to="/ivr" className="side-course-col-link" onClick={handleLinkClick}>IVR</Link></li>
                      <li><Link to="/cdi" className="side-course-col-link" onClick={handleLinkClick}>CDI</Link></li>
                    </ul>
                  </div>

                  {/* AHIMA */}
                  <div className="side-course-col">
                    <div className="side-course-col-header">
                      <span className="side-course-col-title">AHIMA</span>
                      <div className="side-course-col-line" />
                    </div>
                    <ul className="side-course-col-list">
                      <li><Link to="/ccs" className="side-course-col-link" onClick={handleLinkClick}>CCS</Link></li>
                      <li><Link to="/ccs-p" className="side-course-col-link" onClick={handleLinkClick}>CCS-P</Link></li>
                      <li><Link to="/rhia" className="side-course-col-link" onClick={handleLinkClick}>RHIA</Link></li>
                      <li><Link to="/rhit" className="side-course-col-link" onClick={handleLinkClick}>RHIT</Link></li>
                    </ul>
                  </div>

                  {/* HIMAA */}
                  <div className="side-course-col">
                    <div className="side-course-col-header">
                      <span className="side-course-col-title">HIMAA</span>
                      <div className="side-course-col-line" />
                    </div>
                    <ul className="side-course-col-list">
                      <li><Link to="/ccc" className="side-course-col-link" onClick={handleLinkClick}>CCC</Link></li>
                      <li><Link to="/him" className="side-course-col-link" onClick={handleLinkClick}>HIM</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Placements */}
            <li className="side-nav-item">
              <Link to="/placements" className="side-nav-link" onClick={handleLinkClick}>
                <span>Placements</span>
              </Link>
            </li>

            {/* Our Team */}
            <li className="side-nav-item">
              <Link to="/ourteam" className="side-nav-link" onClick={handleLinkClick}>
                <span>Our Team</span>
              </Link>
            </li>

            {/* Blog */}
            <li className="side-nav-item">
              <Link to="/blog" className="side-nav-link" onClick={handleLinkClick}>
                <span>Blog & Updates</span>
              </Link>
            </li>

            {/* Contact Us */}
            <li className="side-nav-item">
              <Link to="/contact" className="side-nav-link" onClick={handleLinkClick}>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="side-menu-footer">
          <Link
            to="/contact"
            className="side-apply-btn"
            onClick={handleLinkClick}
          >
            Enroll Now / Free Demo
          </Link>
          <div className="side-menu-contact-info">
            <div>
              <span>Helpline: </span>
              <a href="tel:+919159992424">+91 91599 92424</a> / <a href="tel:+919789330044">+91 97893 30044</a>
            </div>
            <div>
              <span>Email: </span>
              <a href="mailto:info@thoughtflows.in">info@thoughtflows.in</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenuBar;
