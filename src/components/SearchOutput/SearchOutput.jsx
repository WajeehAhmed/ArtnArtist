import { React, useState } from "react";
import loader from "../../loader.svg";
import axios from "../../api";
import { toast } from "react-toastify";
import dateFormat from "dateformat";
const SearchOutput = ({
  art,
  isEventAvaiable,
  setisEventAvaiable,
  mainloading,
}) => {
  const [eventList, seteventList] = useState([]);
  const [loading, setloading] = useState(false);
  const getEvents = () => {
    setloading(true);
    axios
      .get(`artists/${art.name}/events?app_id=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        setisEventAvaiable(true);
        seteventList(res.data);
        console.log(res.data);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setloading(false);
          toast.error(err);
        }, 1000);
      });
  };
  return (
    <>
      {!mainloading ? (
        <figure class="md:flex bg-gray-500 rounded-xl p-8 md:p-0 mx-auto my-5 w-9/12">
          <img
            class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto lg:ml-0"
            src={art.image_url}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4 mr-auto">
            <blockquote>
              <h2 className="text-4xl my-4 font-sans text-white font-bold">
                {art.name}
              </h2>
              <p class="text-lg text-white font-sans">{art.qoute}</p>
            </blockquote>
            <figcaption class="font-medium font-sans">
              <div class="text-white font-sans">
                Tracks : {art.tracker_count}
              </div>
              <div class="text-white font-sans">
                {" "}
                Upcoming Events : {art.upcoming_event_count}
              </div>
              <div className="flex items-center my-2">
                {art.facebook_page_url !== "" ? (
                  <span className="text-blue-700 bg-blue-400 font-sans font-bold p-1 mr-2 rounded cursor-pointer">
                    <a
                      href={art.facebook_page_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook
                    </a>
                  </span>
                ) : null}
                {art.upcoming_event_count > 0 ? (
                  <span
                    className="text-red-900 bg-red-400 font-sans font-bold p-1 mr-2 rounded cursor-pointer"
                    onClick={() => {
                      getEvents();
                    }}
                  >
                    Event
                  </span>
                ) : null}
              </div>
            </figcaption>
          </div>
        </figure>
      ) : (
        <div className="flex w-screen">
          {" "}
          <img className="mx-auto" src={loader} alt="loading..." />
        </div>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
        {isEventAvaiable ? (
          eventList.map((event) => {
            return (
              <div className="flex flex-col items-center m-2 p-2 bg-red-400 rounded">
                <div class="text-white font-sans">{event.description}</div>
                <div class="text-white font-sans">
                  {event.venue.country}, {event.venue.city}
                </div>
                <div class="text-white font-sans">
                  Location : {event.venue.name}
                </div>
                <div class="text-white font-sans">
                  Date : {dateFormat(event.datetime, " mmmm dd, yyyy, h:MM")}
                </div>
              </div>
            );
          })
        ) : loading ? (
          <div className="flex w-screen">
            {" "}
            <img className="mx-auto" src={loader} alt="loading..." />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default SearchOutput;
