import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/FeedBAckData";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedBack, setFeedBack] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedBack]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedBackStats feedBack={feedBack} />
                <FeedBackList
                  feedBack={feedBack}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}
export default App;
