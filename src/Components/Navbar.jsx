/* eslint-disable react/prop-types */
import { SlPlaylist } from "react-icons/sl";
import MusicList from "./MusicList";
import { useRef } from "react";
import { motion } from "motion/react";
const Navbar = ({ runMusic, songs, currentMusicPlaying, playingMusicInfo }) => {
      const navBar = useRef(null);
      return (
            <>
                  <section className="w-full flex justify-end items-center p-5 ">
                        {currentMusicPlaying.paused && (
                              <h1 className="text-xl text-white whitespace-nowrap absolute tracking-tighter leading-none w-[95%] text-center  font-medium">
                                    Crafted by <span className={`${playingMusicInfo.textColor} font-bold`}>Ahmad</span>
                              </h1>
                        )}
                        <motion.span
                              whileTap={{ scale: 0.7 }}
                              className="sm:hidden"
                              onClick={() => {
                                    navBar.current.style.right = 0;
                              }}
                        >
                              <SlPlaylist size={"1.4rem"} />
                        </motion.span>
                  </section>
                  <motion.div ref={navBar} className="z-50 right-[-100%] sm:right-16 sm:top-24 transition-all ease-in-out duration-200 w-full sm:w-[40%] h-screen sm:h-[50%] absolute top-0">
                        <MusicList playingMusicInfo={playingMusicInfo} songs={songs} runMusic={runMusic} nav={navBar} />
                  </motion.div>
            </>
      );
};

export default Navbar;
