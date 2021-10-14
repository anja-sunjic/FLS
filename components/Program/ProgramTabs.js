import { wed } from "../../data/program";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function ProgramTabs() {
  return (
    <>
      <section className="section program-tabs">
        <div className="container">
          <Tabs>
            <TabList>
              <Tab>Day 1</Tab>
              <Tab>Day 2</Tab>
              <Tab>Day 3</Tab>
            </TabList>

            <TabPanel>
              <div className="head">
                <h2>education track - WEDNESDAY, DECEMBER 15</h2>
                <img src="/program-lines.png" alt="" />
              </div>
              {wed.map((item) => {
                return (
                  <div
                    className={`program-item ${
                      item.type === "Break" ? "break" : ""
                    }`}
                  >
                    <div className="left">
                      <p className="time">{item.time}</p>
                      <p className="type">{item.type}</p>
                    </div>
                    <div className="right">
                      {item.events.map((ev) => {
                        return (
                          <>
                            <p className="title">{ev.title}</p>
                            <p className="speaker">{ev.speaker}</p>
                            <p className="desc">{ev.desc}</p>
                            <div className="tags">
                              {ev.tags.map((tag) => {
                                return <p className="tag">{tag}</p>;
                              })}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
}
