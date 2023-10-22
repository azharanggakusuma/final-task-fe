/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/img/logo.png";
import GooglePlay from "../assets/img/google-play.png";
import AppStore from "../assets/img/app-store.png";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-slate-900 py-6">
      <Container>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="lg:-mt-16 lg:mb-0">
            <img
              src={Logo}
              alt="Logo"
              className="hidden lg:flex w-14 h-10 mb-4"
            />
            <div className="hidden lg:flex ">
              <p className="text-left text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Delectus labore ipsum libero sunt ex voluptas molestias
                laudantium
                <br />
                architecto laborum rem eius totam eveniet aut ratione, cumque
                nam,
                <br />
                ab, amet praesentium.
              </p>
            </div>
          </div>

          {/* Tampilan Desktop */}
          <div className="hidden lg:-mt-24 lg:flex flex-col lg:ml-6">
            <a href="#" className="mb-2 text-white hover:text-gray-300">
              Tentang Kami
            </a>
            <a href="#" className="mb-2 text-white hover:text-gray-300">
              Blog
            </a>
            <a href="#" className="mb-2 text-white hover:text-gray-300">
              Layanan
            </a>
            <a href="#" className="mb-2 text-white hover:text-gray-300">
              Karir
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Pusat Media
            </a>
          </div>

          <div className="hidden lg:flex flex-col items-center lg:ml-6">
            <div className="mb-6">
              <h1 className="text-lg font-bold text-white mb-3 lg:ml-5">Download</h1>
              <a href="#">
                <img src={GooglePlay} alt="Google Play" className="w-36" />
              </a>
              <a href="#">
                <img src={AppStore} alt="App Store" className="w-36" />
              </a>
            </div>
            <div className="flex">
              <div className="mb-6">
                <h1 className="text-lg font-bold text-white mb-3">
                  Social Media
                </h1>
                <a href="#" className="mr-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="text-white"
                  />
                </a>
                <a href="#" className="mr-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="text-white"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="text-white"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Tampilan Mobile */}
          <img src={Logo} alt="Logo" className="lg:hidden w-14 h-10 mb-4" />
          <p className="lg:hidden text-center text-gray-200 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Delectus
            labore ipsum libero sunt ex voluptas molestias laudantium architecto
            laborum rem eius totam eveniet aut ratione, cumque nam, ab, amet
            praesentium.
          </p>
          <div className="lg:hidden items-center mt-6">
            <a href="#" className="mb-2 text-white hover:text-gray-300 mr-3">
              Tentang Kami
            </a>
            <a href="#" className="mb-2 text-white hover:text-gray-300 mr-3">
              Blog
            </a>
            <a href="#" className="mb-2 text-white hover:text-gray-300 mr-3">
              Layanan
            </a>
            <a href="#" className="mb-2 text-white hover:text-gray-300 mr-3">
              Karir
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-3">
              Pusat Media
            </a>
          </div>

          <div className="lg:hidden items-center mt-6">
            <h1 className="text-lg font-bold text-white mb-2 ml-6">Download</h1>
            <a href="#">
              <img src={GooglePlay} alt="Google Play" className="w-36" />
            </a>
            <a href="#">
              <img src={AppStore} alt="App Store" className="w-36" />
            </a>
          </div>

          <div className="lg:hidden items-center mt-6">
            <h1 className="text-lg font-bold text-white mb-2">Social Media</h1>
            <a href="#" className="mr-2">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-white"
              />
            </a>
            <a href="#" className="mr-2">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="text-white"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-white"
              />
            </a>
          </div>
        </div>
        <hr className="border-t border-blueGray-400 my-4" />
        <div className="container mx-auto text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Azharangga Kusuma. All
          rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
