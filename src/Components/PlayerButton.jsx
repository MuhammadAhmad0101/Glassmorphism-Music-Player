/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { FaPlay } from "react-icons/fa6";
import { IoIosPause } from "react-icons/io";

import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
const size = "3rem";

const PlayerButton = ({ playingMusic, currentMusicPlaying, isPlaying, setisPlaying, song, runMusic }) => {
      const codewithBracket = playingMusic.textColor.split("[").at(-1);
      const color = codewithBracket.slice(0, codewithBracket.length - 1);
      const Findindex = song.findIndex((eachItem) => eachItem.title === playingMusic.title);
      return (
            <div className="w-full md:px-10 lg:px-40 xl:px-52 flex items-center justify-around mt-1">
                  <motion.span
                        initial={{ y: "200%" }}
                        animate={{ y: 0, transition: { delay: 0.2, ease: "backInOut", duration: 0.4 } }}
                        whileTap={{ scale: 0.755588 }}
                        onClick={() => {
                              Findindex > 0 ? runMusic(Findindex - 1) : runMusic(song.length - 1);
                        }}
                  >
                        <MdSkipPrevious color={color} size={size} />
                  </motion.span>
                  {isPlaying ? (
                        <motion.span
                              initial={{ y: "200%" }}
                              animate={{ y: 0, transition: { delay: 0.2, ease: "backInOut", duration: 0.4 } }}
                              whileTap={{ scale: 0.755588 }}
                              onClick={() => {
                                    currentMusicPlaying.pause();
                                    setisPlaying(false);
                              }}
                        >
                              <IoIosPause color={color} size={size} />
                        </motion.span>
                  ) : (
                        <motion.span
                              whileTap={{ scale: 0.755588 }}
                              initial={{ y: "200%" }}
                              animate={{ y: 0, transition: { delay: 0.2, ease: "backInOut", duration: 0.4 } }}
                              onClick={() => {
                                    currentMusicPlaying.play();
                                    setisPlaying(true);
                              }}
                        >
                              <FaPlay color={color} size={"2.5rem"} />
                        </motion.span>
                  )}
                  <motion.span initial={{ y: "200%" }} animate={{ y: 0, transition: { delay: 0.2, ease: "backInOut", duration: 0.4 } }} whileTap={{ scale: 0.755588 }} onClick={() => (Findindex < song.length - 1 ? runMusic(Findindex + 1) : runMusic(0))}>
                        <MdSkipNext color={color} size={size} />
                  </motion.span>
            </div>
      );
};

export default PlayerButton;
