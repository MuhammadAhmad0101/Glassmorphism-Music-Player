/* eslint-disable react/prop-types */
import MusicItems from "./MusicItems";
import { motion } from "motion/react";
import { MdOutlineClose } from "react-icons/md";

const MusicList = ({ nav, song, playingMusic, runMusic }) => {
      return (
            <motion.div className={`w-full nav relative h-full cursor-pointer overflow-x-hidden overflow-y-scroll  p-5 sm:bg-transparent ${playingMusic.bgColor}`}>
                  <h1 className={`text-4xl mb-2 font-semibold tracking-tight ${playingMusic.textColor} rounded-3xl sm:hidden  py-2 leading-none uppercase`}>PlayList</h1>
                  <motion.span
                        whileTap={{ scale: 0.7 }}
                        onClick={() => {
                              nav.current.style.right = "-100%";
                        }}
                        className="absolute sm:hidden top-7 right-5"
                  >
                        <MdOutlineClose size={"2.5rem"} />
                  </motion.span>
                  <section className="w-full h-full">
                        {song.map((eachMusic, index) => (
                              <span onClick={() => runMusic(index)} key={index}>
                                    <MusicItems musicDetail={eachMusic} />
                              </span>
                        ))}
                  </section>
            </motion.div>
      );
};

export default MusicList;
