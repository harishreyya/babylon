import { VideoCall } from "./videoCall.jsx";
import Percentage from "./percentage.jsx";
import WordList from "./wordsList.jsx";
import TextTransition from "./questions";
import CircularProgressBar from "./circlualrProgressbar.jsx";

export const BodyContainer = ()=>{
    return <div className="container-body-wrapper">
          <div className="left-part-wrapper">
<div className="medical-history-container">
    <p className="top-heading">Past Medical History</p>
    <div className="headings">Relavent Match</div>
    
        <div className="headings"> &#128172; Test Results</div>
    
    <div className="flex symptom-wrapper">
        <div className="symptom-words">
            <div>Normal Liver Function (AI)</div>
            <div>Normal Thyroid Function (HI)</div>
            <div>Normal Blood Count (AI)</div>
        </div>
        <div className="symptom-duration">
        <div>2 week ago</div>
        <div>4 week ago</div>
        <div>1 week ago</div>
        </div>
    </div>


    <div className="headings">&#128138; Prescription</div>
    
    <div className="flex symptom-wrapper">
        <div className="symptom-words">
            <div>Yashim 1 tablet OD</div>
            <div>Cetrazine 10mg OD PRN</div>
        </div>
        <div className="symptom-duration">
        <div>3 years ago</div>
        <div>2 years ago</div>
        </div>
    </div>

    <div className="headings">
        Timeline
    </div>

    <div className="headings">&#128172; AI Assessment</div>
    
    <div className="flex symptom-wrapper">
        <div className="symptom-words">
            <div>Meniere's Disease (AI)</div>
        </div>
        <div>
        <div className="symptom-duration">just now</div>
        </div>
    </div>

    <div className="headings">&#128172; AI Assessment</div>
    
    <div className="flex symptom-wrapper">
        <div className="symptom-words">
            <div>Glandular Fever (AI)</div>
        </div>
        <div>
        <div className="symptom-duration">6 week ago</div>
        </div>
    </div>
    <div className="see-more">see more</div>

</div>
<br />
<div className="circular-progress-wrap">
<p className="top-heading">Digital Twin</p>
<div className="circular-organ-wrap flex">

    <div className="circular-bar-wrap">
        <div>
        <div className="over-all-health">Overall health score 4 weeks ago</div>
    <CircularProgressBar percentage={75} radius={45} stroke={"#4FC25A"}/>
    </div> 
    
    <CircularProgressBar percentage={55} radius={25} stroke={"#2860B2"}/> 
    <div className="yellow-tick percentage-words">Activity</div>
    
    <CircularProgressBar percentage={40} radius={25} stroke={"#D6C6A6"}/> 
    <div className="percentage-words">Nutrition</div>
    
    <CircularProgressBar percentage={38} radius={25} stroke={"#4FC25A"}/> 
    <div className="yellow-tick percentage-words">Mental Health</div>
    </div>

<div className="skeleton-img-wrap">
    <br />
    <img src="https://knowledge.carolina.com/wp-content/uploads/2022/04/shutterstock_316957247-e1680005898168.jpg" alt="" />
</div>
<div className="organ-names-wrapper">
    <p><span className="green-tick">&#10004;</span> Heart</p>
    <p><span>&#10005;</span> Lungs</p>
    <p><span className="green-tick">&#10004;</span> Liver</p>
    <p><span>&#10004;</span> Kidneys</p>
    <p><span className="green-tick">&#10004;</span> Brain</p>
    <p><span className="green-tick">&#10004;</span> Stomach</p>
    <p><span className="yellow-tick">&#10004;</span> Small Intestine</p>
    <p><span className="yellow-tick">&#10004;</span> Large Intestine</p>
    <p><span className="blue-tick">&#10005;</span> Pancreas</p>
    <p><span >&#10004;</span> Skin</p>
</div>
</div>
</div>
          </div>

          {/* ---------middle part------ */}

          <div className="middle-part-wrapper">
         <VideoCall/>
         <br />
         <div className="questions-wrapper">
            <p className="top-heading">Suggested Questions</p>
            <TextTransition/>
            <div className="see-more">see more</div>
            </div>
            <br />
           <div className="percentage-wrapper">
           <p className="top-heading">Live Possible Causes</p>
            <Percentage/>
          </div>
          </div>

          <div className="right-part-wrapper">
<WordList />
          </div>
    </div>
}