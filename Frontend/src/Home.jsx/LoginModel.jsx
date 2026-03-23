import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { auth, provider } from "../FireBase";

function LoginModal({ open, onClose }) {

  const handleGoogleAuth = async () => {
    try {

      const result = await signInWithPopup(auth, provider);

      const serverUrl = import.meta.env.VITE_SERVER_URL;

      const { data } = await axios.post(
        `${serverUrl}/api/auth/google`,
        {
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL
        },
        {
          withCredentials: true
        }
      );

      console.log(data);

      onClose();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden">

              <motion.div
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]"
              />

              <motion.div
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/30 blur-[140px]"
              />

              <button
                className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg"
                onClick={onClose}
              >
                ✕
              </button>

              <div className="relative px-8 pt-14 pb-10 text-center">

                <motion.h1
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 backdrop-blur-md"
                >
                  AI-powered website builder
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-3xl font-semibold leading-tight mb-6 space-x-2"
                >
                  <span>Welcome to</span>

                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    WebGen.ai
                  </span>
                </motion.h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={handleGoogleAuth}
                  className="group relative w-full h-12 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <img
                      src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                      alt="google"
                      className="h-5 w-5"
                    />
                    Continue with Google
                  </div>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-4 my-10"
                >
                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-xs text-zinc-500 tracking-wide">
                    Secure Login
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-xs text-zinc-500 leading-relaxed"
                >
                  By continuing, you agree to our{" "}
                  <span className="underline cursor-pointer hover:text-zinc-300">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer hover:text-zinc-300">
                    Privacy Policy
                  </span>.
                </motion.p>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoginModal;
