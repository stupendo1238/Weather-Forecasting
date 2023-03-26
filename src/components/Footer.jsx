import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope,faCoffee,faHeart,faBolt,faTree} from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
  return (
    <>
    <div className="bottom">
     <footer className="bg-dark text-center text-white" >
     <div className="container p-4 pb-0">
     <section className="mb-4" >
     <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor:"#3b5998"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faHeart} />
</a>
            <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3bf998"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faBolt} />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor:"#0082ca"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faTree} />
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faCoffee} />
      </a>
    </section>
    </div>
  <div className="text-center padding bg-dark">
    © 2023 Copyright : All Rights Reserved
    </div>
</footer>
    </div>
    </>
  )
}