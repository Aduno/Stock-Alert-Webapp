import React from 'react'
import { Accordion } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import '../css/FAQ.css';

function FAQ() {
  return (
    <>
    <Navbar/>
    <div className='container faq'>
      <Accordion>
      <Accordion.Item eventKey="-1">
          <Accordion.Header>What can I do on this site?</Accordion.Header>
          <Accordion.Body>
            This site provides four main functionalities. <br/><br/>
            1. Find basic information of publicly traded companies<br/>
            2. Create price alert notifications <br/>
            3. Discovery new stocks<br/>
            4. View trending finanical news <br/><br/>
            If you have any additional features you would like to see, please share your feedback in the contact us page!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Market Cap?</Accordion.Header>
          <Accordion.Body>
            Market Cap is the market value of a publicly traded company's outstanding shares. Market capitalization is equal to the share price multiplied by the number of shares outstanding.<br/>
            <br/><a href='https://www.investopedia.com/terms/m/marketcapitalization.asp'>Read more</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is PE ratio?</Accordion.Header>
          <Accordion.Body>
            The price-to-earnings ratio is the ratio for valuing a company that measures its current share price relative to its earnings per share (EPS). The price-to-earnings ratio is also sometimes known as the price multiple or the earnings multiple. 
            <br/><br/><a href='https://www.investopedia.com/terms/p/price-earningsratio.asp'>Read more</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is volume?</Accordion.Header>
          <Accordion.Body>
          Volume is the amount of an asset or security that changes hands over some period of time, often over the course of a day. The volume shown on the site are over a course of a day. 
          <br/><br/><a href='https://www.investopedia.com/terms/v/volume.asp'>Read more</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is beta?</Accordion.Header>
          <Accordion.Body>
          Beta (β) is a measure of the volatility—or systematic risk—of a security or portfolio compared to the market as a whole (usually the S&P 500). Stocks with betas higher than 1.0 can be interpreted as more volatile than the S&P 500. 
          <br/><br/><a href='https://www.investopedia.com/terms/b/beta.asp'>Read more</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What is yield?</Accordion.Header>
          <Accordion.Body>
          "Yield" refers to the earnings generated and realized on an investment over a particular period of time. It's expressed as a percentage based on the invested amount, current market value, or face value of the security. 
          <br/><br/><a href='https://www.investopedia.com/terms/y/yield.asp'>Read more</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>What is 52W High/Low?</Accordion.Header>
          <Accordion.Body>
            52W high and low refers to the maximum and minimium stock price in the last 52 weeks.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </>
  )
}

export default FAQ