import React from 'react';
import './Governance.css';
import GovernanceImg from "../images/governanceImg.jpg"
import Contact from './Contact';
import "./contact.css"


const Governance = () => {
  return (
    <>
    <div className="content-container">
      <img className='govtImg' src={GovernanceImg}/>
      <div className="set-container">
        <p className="heading head-btn">Audit Reports</p>
        <div className="list-date-container">
          <div className="bar"></div>
          <p className="sub-heading">2019-2022</p>
          <div className="doc-list-container">
            <div className="doc-detail-container">
              <p className="date">2021-2022</p>
              <a
                href="/static/media/Audit 2021-22 Comp.eda7e963.pdf"
                target="_blank"
                className="file-name"
              >
                Audit 2021-2022_comp.pdf
              </a>
            </div>
            <div className="doc-detail-container">
              <p className="date">2020-2021</p>
              <a
                href="/static/media/Audit 2020-21_ comp.df1f889e.pdf"
                target="_blank"
                className="file-name"
              >
                Audit 2020-2021_comp.pdf
              </a>
            </div>
            <div className="doc-detail-container">
              <p className="date">2019-2020</p>
              <a
                href="/static/media/Audit 2019-20_ comp.da30c542.pdf"
                target="_blank"
                className="file-name"
              >
                Audit 2019-2020_comp.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="set-container">
        <p className="heading">FCRA</p>
        <div className="list-date-container">
          <div className="bar"></div>
          <p className="sub-heading">2019-2022</p>
          <div className="doc-list-container">
            <div className="doc-detail-container">
              <p className="date">2021-2022</p>
              <a
                href="/static/media/FC 4 2021-22.a84c51da.pdf"
                target="_blank"
                className="file-name"
              >
                FC 4 2021-22.pdf
              </a>
            </div>
            <div className="doc-detail-container">
              <p className="date">2020-2021</p>
              <a
                href="/static/media/FC 4 2020-21.c24279f4.pdf"
                target="_blank"
                className="file-name"
              >
                FC 4 2020-21.pdf
              </a>
            </div>
            <div className="doc-detail-container">
              <p className="date">2019-2020</p>
              <a
                href="/static/media/FC4 2019-20.59ff7779.pdf"
                target="_blank"
                className="file-name"
              >
                FC4 2019-20.pdf
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="set-container">
        <p className="heading head-btn">Board/Management</p>
        <div className="list-date-container">
          <div className="bar"></div>
          <p className="sub-heading">2023</p>
          <div className="doc-list-container">
            <div className="doc-detail-container">
              <p className="date">Management Committee</p>
              <a
                href="/static/media/List of managing commt.a84180a0.pdf"
                target="_blank"
                className="file-name"
              >
                List of managing commt.pdf
              </a>
            </div>
            <div className="doc-detail-container">
              <p className="date">Board of Directors</p>
              <a
                href="/static/media/BOD.731a3ac0.pdf"
                target="_blank"
                className="file-name"
              >
                BOD.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Contact />
      </>
  );
};

export default Governance;
