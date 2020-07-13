import React from "react"
import { Link } from "gatsby"
import logo from '../../content/assets/profile-pic.png'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "jcnk dot space"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler><br/>
        <img style={{ margin: 0 }} src={logo} alt="JCNK" />
        <h1>
          Hey there{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to the JCNK space.</p>
        <p>
          We are crazy audio enthusiasts. We like experimenting with sound and bits.
        </p>
        <p>We are glad that you stopped by!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
