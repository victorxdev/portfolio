import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <h2> Victor Tan </h2>
           <p>Adaptable, motivated and self-driven Economics & Finance major with
cross-disciplinary skills sets involving marketing, analytics,
finance, design and strategy. </p> <p>I am passionate about the FinTech
industry and the use of technology to improve and automate financial
activities. Being a social geek, I love to keep up and discuss latest
technologies & digital trends. </p>

<p>In my free time, I enjoy playing the
guitar, board/video gaming as well as hiking, kayaking & exploring the
outdoors. I'm fascinated about personality assessments & quizzes.</p>
<p>Here's a list of my personality profiles:
Ideation-Strategic-Restorative-Communication-Command
(StrengthsFinder2.0) ENTP (MBTI) Loyal-Skeptic (Enneagram) Mid-O
High-C High-E Mid-A Low-N (Big5) Fire (TetraMap)</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3>Digital Marketing Executive | Funding Societies</h3>
          <p>Funding Societies | Modalku is the largest Peer-to-Peer lending
          platform in Southeast Asia. It provides business financing to SMEs
          which is crowdfunded by retail and institutional investors.</p>

          <h3>Marketing Lead | CareerSocius</h3>
          <p>CareerSocius is a social enterprise that helps job-seekers in
          Singapore maximize their career potential. With a diverse team of
          Branding Buddies spanning across various industries, we offer the
          relevant expertise and experience to guide job seekers in their job
          search.</p>
          {close}
        </article>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Coming Soon</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form action="https://formspree.io/victor.tqw@live.com" method="post">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="_replyto"/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send"/></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="mailto:victor.tqw@live.com" className="icon fa fa-envelope"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.facebook.com/victortqw" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/victortqw/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/victorxmusic" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/victorxdev" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main