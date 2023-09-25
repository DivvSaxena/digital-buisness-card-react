import React from 'react'

export default function Info(){
    return(   
        <div className= "info-section" >
            <img src="../images/profile-pic.png" />
            <h1>Divv Saxena</h1>
            <p>Frontend Developer</p>
            <div className="site-domain">
             <a href="https://portfoliov1-divvsaxena.netlify.app/" >divvsaxena.website</a>
            </div>
            <div className="header-btn">   
                <a className="first-btn" href="mailto: saxenadivv@gmail.com">    
                    <p><i class="fa-solid fa-envelope"></i>Email</p>
                </a>
                <a className="second-btn" href="https://www.linkedin.com/in/divv-saxena-6489a1247/">    
                    <p><i class="fa-brands fa-linkedin"></i>Linkedln</p>
                </a>
            </div>
        </div>
    )
}