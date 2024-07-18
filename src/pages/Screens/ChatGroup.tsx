import { useNavigate } from 'react-router-dom';
import './Chat.css';
const ChatGroup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed-top-right flex align-center"  onClick={() => { navigate("/chat") }}>
        <svg
          className="hw-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            navigate('/');
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <button className="go-back-button">Go Back</button>
      </div>
      <div className="tab-pane active h-100  " id="chats-content">
        <div className="d-flex flex-column h-100 bg-slate-600">
          <div className="hide-scrollbar h-100" id="chatContactsList">
            {/* Chat Contact List Start */}
            <ul className="contacts-list" id="chatContactTab" data-chat-list="">
              <li className="contacts-item groups bg-lime-50 text-boxdark">
                <a className="contacts-link" href="javascript:;">
                  <div className="avatar bg-success text-light">
                    <span>
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>

                      {/* Alternate :: External File link */}
                      {/* <img className="injectable" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> */}
                    </span>
                  </div>

                  <div className="contacts-content">
                    <div className="contacts-info">
                      <h6 className="chat-name">Themeforest Group</h6>
                      <div className="chat-time">
                        <span>10:20 pm</span>
                      </div>
                    </div>
                    <div className="contacts-texts">
                      <p className="text-truncate">
                        <span>Jeny: </span>That’s pretty common. I heard that a
                        lot of people had the same experience.
                      </p>
                      <div className="d-inline-flex align-items-center ml-1">
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-16 text-muted"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        {/* Alternate :: External File link */}
                        {/* <img className="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/lock-closed.svg" alt=""/> */}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="contacts-item groups bg-lime-50 text-boxdark">
                <a className="contacts-link" href="javascript:;">
                  <div className="avatar bg-success text-light">
                    <span>
                      {/* Default :: Inline SVG */}
                      <svg
                        className="hw-24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>

                      {/* Alternate :: External File link */}
                      {/* <img className="injectable" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> */}
                    </span>
                  </div>
                  <div className="contacts-content">
                    <div className="contacts-info">
                      <h6 className="chat-name">Themeforest Group</h6>
                      <div className="chat-time">
                        <span>10:20 pm</span>
                      </div>
                    </div>
                    <div className="contacts-texts">
                      <p className="text-truncate">
                        <span>Jeny: </span>That’s pretty common. I heard that a
                        lot of people had the same experience.
                      </p>
                      <div className="d-inline-flex align-items-center ml-1">
                        {/* Default :: Inline SVG */}
                        <svg
                          className="hw-16 text-muted"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        {/* Alternate :: External File link */}
                        {/* <img className="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/lock-closed.svg" alt=""/> */}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            {/* Chat Contact List End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatGroup;
