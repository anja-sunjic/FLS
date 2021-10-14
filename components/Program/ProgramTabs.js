import { wed } from "../../data/program";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const createProgram = (day) => {
  return day.map((item) => {
    return (
      <div
        className={`program-item ${item.type === "Break" ? "break" : ""}`}
        key={item.time}
      >
        <div className="left">
          <p className="time">{item.time}</p>
          <p className="type">{item.type}</p>
        </div>
        <div className="right">
          {item.events.map((ev) => {
            return (
              <div className="item-event" key={ev.id}>
                <p className="title">{ev.title}</p>
                {ev.speaker && <p className="speaker">{ev.speaker}</p>}
                {ev.desc && <p className="desc">{ev.desc}</p>}
                <div className="tags">
                  {ev.tags &&
                    ev.tags.map((tag) => {
                      return (
                        <p className="tag" key={tag}>
                          {tag}
                        </p>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

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
                <img
                  src="/program-lines.png"
                  alt=""
                  className="is-hidden-touch"
                />
              </div>
              {createProgram(wed)}
            </TabPanel>
            <TabPanel>
              <div className="head">
                <h2>technology track - thursday, DECEMBER 16</h2>
                <img
                  src="/program-lines.png"
                  alt=""
                  className="is-hidden-touch"
                />
              </div>
              {/* {createProgram(thu)} */}
            </TabPanel>
            <TabPanel>
              <div className="head">
                <h2>leadership track - friday, DECEMBER 17</h2>
                <img
                  src="/program-lines.png"
                  alt=""
                  className="is-hidden-touch"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
}
