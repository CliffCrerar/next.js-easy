/**
 * HOME 
 */

import Layout from 'layout'

const Home = () => (
  <Layout>
    <section>

      <div className='hero'>
        <h1 className='title'>Next.js easy</h1>
        <p className='description'>
          Already configured with all you need to git clone and go!
          
        </p>
        <div class="sub-heading-small">
          <small>Courtesy of <a href="https://www.npmjs.com/package/next">Next.js</a></small>
        </div>
      
        <div className='row'>

          <a className='card' href=''>
            <h3>Preconfigured &rarr;</h3>
            <p>SASS, Sourcemaps, Node-path, layout, next-config</p>
          </a>

          <a href='' className='card'>
            <h3>Add what you nee &rarr;</h3>
            <p>Just plugin what you, frameworks, more plugins its ready to go</p>
          </a>

          <a className='card' href=''>
            <h3>Deploy Now &rarr;</h3>
            <p> Deployt with now</p>
          </a>

        </div>
      </div>


    </section>
  </Layout>
)

export default Home
