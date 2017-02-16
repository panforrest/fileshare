import React, { Component } from 'react'
<<<<<<< HEAD
import { Files } from '../containers'
=======
import { Account, Files, Profile, Profiles } from '../containers'
import { ProfileLayout, ProfilesLayout, ProfileStatic } from '../layout'
>>>>>>> upstream/theme-future-imperfect
import { Link } from 'react-router'

class Home extends Component {
  render(){
    return(
<<<<<<< HEAD

=======
>>>>>>> upstream/theme-future-imperfect
			<div id="wrapper">
				<header id="header">
					<h1><Link to="/">Fileshare</Link></h1>
					<nav className="links" style={{marginRight:100}}>
						<ul>
							<li><Link to="/">Image</Link></li>
							<li><Link to="/">Video</Link></li>
							<li><Link to="/">PDF</Link></li>
							<li><Link to="/">Misc</Link></li>
							<li><Link to="/account">Login | Signup</Link></li>
						</ul>
					</nav>
				</header>

				<div id="main">
					<div className="post">
<<<<<<< HEAD
						<section id="intro">
							<header>
								<h2>shared files</h2>
							</header>
						</section>
						<Link to="/profile/">Robs Profile</Link><br />
						<Link to="/profile/"><strong>FFs Profile</strong></Link>
=======

						<section id="intro">
							<header>
								<h2 style={{textAlign:'center'}}>shared files</h2>
							</header>
						</section>

						<Link to="/profile/">Robs Profile</Link><br />
						<Link to="/profile/"><strong>FFs Profile</strong></Link>
						
						<section>
							<div className="mini-posts">
								<article className="mini-post">
									<header>
										<h3><a href="#">Grandmothers Salsa Verde</a></h3>
										<time className="published" datetime="2017-02-13">February 13, 2017</time>
										<a href="#" className="author"><img src="/images/avatar.jpg" alt="" /></a>
									</header>
									<a href="#" className="image"><img src="/images/pic04.jpg" alt="" /></a>
								</article>

								<article className="mini-post">
									<header>
										<h3><a href="#">Vitae sed condimentum</a></h3>
										<time className="published" datetime="2015-10-20">October 20, 2015</time>
										<a href="#" className="author"><img src="/images/avatar.jpg" alt="" /></a>
									</header>
									<a href="#" className="image"><img src="/images/pic04.jpg" alt="" /></a>
								</article>

								<article className="mini-post">
									<header>
										<h3><a href="#">Vitae sed condimentum</a></h3>
										<time className="published" datetime="2015-10-20">October 20, 2015</time>
										<a href="#" className="author"><img src="/images/avatar.jpg" alt="" /></a>
									</header>
									<a href="#" className="image"><img src="/images/pic04.jpg" alt="" /></a>
								</article>
							</div>
						</section>

						<ul>
							<li><Link to="/profile/">Robs Profile</Link></li><br />
							<li><Link to="/profile/"><strong>FFs Profile</strong></Link></li>
						</ul>

>>>>>>> upstream/theme-future-imperfect
					</div>
				</div>

				<section id="sidebar">
					<section id="intro">
						<header>
							<h3>Fireshare: Home</h3>
						</header>
					</section>
					<section>
						<ul className="posts">
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 1</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic01.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 2</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic02.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 3</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic03.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File 4</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic04.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File n-1</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic05.jpg" alt="" /></Link>
								</article>
							</li>
							<li>
								<article>
									<header>
										<h3><Link to={'/'}>File n</Link></h3>
									</header>
									<Link to={'/'} className="image"><img src="/images/pic06.jpg" alt="" /></Link>
								</article>
							</li>
						</ul>
					</section>

					<div style={{paddingTop:20}}>
						<Files />
					</div>

				</section>
			</div>
    )
  }
}

export default Home
