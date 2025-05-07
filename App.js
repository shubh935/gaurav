// Path: src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Login from "./pages/Login";


import Connections from "./pages/Connections";
<Route path="/connections" element={<Connections />} />;


import ProfileEdit from "./pages/ProfileEdit";
<Route path="/profile/edit" element={<ProfileEdit />} />;


import JobApply from "./pages/JobApply";
<Route path="/jobs/apply" element={<JobApply />} />;


import Chat from "./pages/Chat";
<Route path="/chat" element={<Chat />} />;





const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/jobs"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Jobs />
              </motion.div>
            }
          />
          <Route
            path="/profile"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Profile />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Login />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
