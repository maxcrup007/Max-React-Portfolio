import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaShieldHalved, FaDesktop  } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Full-stack Developer</h4>
                <p>
                    I design and build complete web applications from database to UI, taking a feature from
                    requirements to a working deployed solution.
                </p>
                <ul className={styles.tool_list}>
                    <li><span className={styles.tool_name}>Django</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Python web framework for backend development</span></li>
                    <li><span className={styles.tool_name}>Flask</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Lightweight Python framework for microservices & APIs</span></li>
                    <li><span className={styles.tool_name}>REST API</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Design & build structured HTTP API endpoints</span></li>
                    <li><span className={styles.tool_name}>React.js</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Component-based UI development</span></li>
                    <li><span className={styles.tool_name}>Vue.js</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Progressive JavaScript UI framework</span></li>
                    <li><span className={styles.tool_name}>Vite</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Fast build tool & development server</span></li>
                    <li><span className={styles.tool_name}>TypeScript</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Strongly typed JavaScript (currently learning)</span></li>
                </ul>
            </div>
            <div className={styles.services_items}>
                <FaShieldHalved />
                <h4>QA Engineer</h4>
                <p>
                    I help teams ship with confidence by covering both functional and performance testing
                    across web, API, and load scenarios.
                </p>
                <ul className={styles.tool_list}>
                    <li><span className={styles.tool_name}>Selenium WebDriver</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Web browser automation testing</span></li>
                    <li><span className={styles.tool_name}>Robot Framework</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Keyword-driven automation test framework</span></li>
                    <li><span className={styles.tool_name}>Playwright</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Web scraping, data extraction and automation test</span></li>
                    <li><span className={styles.tool_name}>Locust</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Performance and load testing</span></li>
                    <li><span className={styles.tool_name}>JMeter</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Performance and load testing</span></li>
                    <li><span className={styles.tool_name}>Katalon</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Auto generate elements locator</span></li>
                    <li><span className={styles.tool_name}>Postman / Newman</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Test & automate API requests</span></li>
                </ul>
            </div>
            <div className={styles.services_items}>
                <FaDesktop />
                <h4>Data Analyst</h4>
                <p>
                    I have the skill about data analysis, collects, cleans, converts and interprets raw data to help solve problems and make better decisions. 
                </p>
                <ul className={styles.tool_list}>
                    
                    <li><span className={styles.tool_name}>SQL</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Use for execute and manage database</span></li>
                    <li><span className={styles.tool_name}>Excel/Google Sheets</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Use for calculation and summarize raw/basic data</span></li>
                    <li><span className={styles.tool_name}>Power BI/Tableau</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Create dashboard and graph for explanation information</span></li>
                    <li><span className={styles.tool_name}>Pandas</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Python library use for manage and conversion big data</span></li>
                    <li><span className={styles.tool_name}>Matplotlib</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Python library use for setting graph and data visualization</span></li>
                    <li><span className={styles.tool_name}>Scikit-learn</span><span className={styles.tool_arrow}>→</span><span className={styles.tool_desc}>Python library use for simple ML as prediction and Clustering data</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Services
