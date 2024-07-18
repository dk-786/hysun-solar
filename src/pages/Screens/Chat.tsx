import './Chat.css';
import { useNavigate } from 'react-router-dom';

const chat = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="chats-tab-open ">
        <div className="main-layout">
          <main className="main main-visible">
            <div className="chats">
              <div className="chat-body">
                <div className="chat-header">
                  {/* Chat Back Button (Visible only in Small Devices)  */}
                  <button
                    className="btn btn-secondary btn-icon btn-minimal btn-sm d-xl-none"
                    type="button"
                    data-close=""
                  >
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
                    {/* <img className="injectable hw-20" src="./../../assets/media/heroicons/outline/arrow-left.svg" alt="">  */}
                  </button>

                  {/* Chat participant's Name  */}
                  <div className="media chat-name align-items-center text-truncate">
                    <div className="avatar bg-success text-light d-none d-sm-inline-block mr-3">
                      <span>
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
                      </span>
                    </div>

                    <div className="media-body align-self-center ">
                      <h6 className="text-truncate mb-0">Themeforest Group</h6>
                      <small className="text-muted">252 Participants</small>
                    </div>
                  </div>

                  {/* Chat Options  */}
                  <ul className="nav flex-nowrap">
                    <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                      <a
                        className="nav-link text-muted px-1"
                        data-toggle="collapse"
                        data-target="#searchCollapse"
                        href="#"
                        aria-expanded="false"
                      >
                        <svg
                          className="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>

                        {/* <img src="./../../assets/media/heroicons/outline/search.svg" alt="" className="injectable hw-20">  */}
                      </a>
                    </li>

                    <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                      <a
                        className="nav-link text-muted px-1"
                        href="#"
                        title="Add People"
                      >
                        <svg
                          className="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        {/* <img src="./../../assets/media/heroicons/outline/phone.svg" alt="" className="injectable hw-20">  */}
                      </a>
                    </li>
                    <li className="nav-item list-inline-item d-none d-sm-block mr-0">
                      <div className="dropdown">
                        <a
                          className="nav-link text-muted px-1"
                          href="#"
                          role="button"
                          title="Details"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            className="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                          {/* <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" className="injectable hw-20">  */}
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                            data-chat-info-toggle=""
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/information-circle.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>View Info</span>
                          </a>

                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                clip-rule="evenodd"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/volume-off.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Mute Notifications</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/photograph.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Wallpaper</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/archive.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Archive</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/trash.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Delete</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex text-danger"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/ban.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Block</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item list-inline-item d-sm-none mr-0">
                      <div className="dropdown">
                        <a
                          className="nav-link text-muted px-1"
                          href="#"
                          role="button"
                          title="Details"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            className="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                          {/* <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" className="injectable hw-20">  */}
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/phone.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Call</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                            data-toggle="collapse"
                            data-target="#searchCollapse"
                            aria-expanded="false"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/search.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Search</span>
                          </a>

                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                            data-chat-info-toggle=""
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/information-circle.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>View Info</span>
                          </a>

                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                clip-rule="evenodd"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/volume-off.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Mute Notifications</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/photograph.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Wallpaper</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              />
                            </svg>
                            {/* <img src="./../../assets/media/heroicons/outline/archive.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Archive</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/trash.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Delete</span>
                          </a>
                          <a
                            className="dropdown-item align-items-center d-flex text-danger"
                            href="#"
                          >
                            <svg
                              className="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>

                            {/* <img src="./../../assets/media/heroicons/outline/ban.svg" alt="" className="injectable hw-20 mr-2">  */}
                            <span>Block</span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  className="collapse border-bottom px-3"
                  id="searchCollapse"
                >
                  <div className="container-xl py-2 px-0 px-md-3">
                    <div className="input-group bg-light ">
                      <input
                        type="text"
                        className="form-control form-control-md border-right-0 bg-transparent pr-0"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent border-left-0">
                          <svg
                            className="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>

                          {/* <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt="Search icon"> --> */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-content p-2">
                  <div className="container">
                    {/* Message Day Start */}
                    <div className="message-day">
                      <div
                        className="message-divider sticky-top pb-2"
                        data-label="Yesterday"
                      >
                        &nbsp;
                      </div>

                      {/* Received Message Start */}
                      <div className="message">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <h6 className="text-dark">Brittany Williams</h6>
                            <span>
                              Wow! Today is October 30th! Halloween is tomorrow
                              already! Have you decided what you will be
                              dressing up for Halloween yet, Sara?
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/1.png" />
                          </div>
                          <span className="message-date">9:12am</span>
                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Received Message End */}

                      {/* Self Message Start */}
                      <div className="message self">
                        <div className="message-wrapper">
                          <div className="message-content">
                            {' '}
                            I’m not sure what I want to be yet. I want to be
                            either a butterfly or a pumpkin. But why do we dress
                            up for Halloween?
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/6.png" />
                          </div>

                          <span className="message-date">9:12am</span>
                          <span className="message-status">Edited</span>

                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                                <span>Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Self Message End */}

                      {/* Received Message Start */}
                      <div className="message">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <h6 className="text-dark">Jacqueline James</h6>
                            <span>
                              Halloween is a festival for children, and costumes
                              make it more special. I think we have much more
                              fun going from house to house asking for candies
                              (trick-or-treating) after sunset dressed in our
                              favourite costumes.
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/7.png" />
                          </div>
                          <span className="message-date">9:12am</span>
                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Received Message End */}

                      {/* Received Message Start */}
                      <div className="message">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <h6 className="text-dark">Bonnie Torres</h6>
                            <span>
                              Yes, I remember having a lot of fun last year when
                              mom took me around in a bunny outfit. Do you know
                              what you want to be yet, Patrick?
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/2.png" />
                          </div>
                          <span className="message-date">9:12am</span>
                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Received Message End */}

                      {/* Self Message Start */}
                      <div className="message self">
                        <div className="message-wrapper">
                          <div className="message-content">
                            I want to be Batman! I like wearing the cape and the
                            mask. I think you should be a butterfly. You are so
                            much shorter than me, and dressed in a pumpkin
                            costume, someone might think you really are one and
                            try to make a pie out of you.
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/6.png" />
                          </div>

                          <span className="message-date">9:12am</span>

                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                                <span>Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Self Message End */}

                      {/* Received Message Start */}
                      <div className="message">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <h6 className="text-dark">Annie Richardson</h6>
                            <span>
                              How could anyone mistake me for a real pumpkin?
                              Real pumpkins do not have a head or arms or legs.
                              But I suppose I will be a butterfly anyway. I can
                              have pretty wings.
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/5.png" />
                          </div>
                          <span className="message-date">9:12am</span>
                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Received Message End */}
                    </div>
                    {/* Message Day End */}

                    {/* Message Day Start */}
                    <div className="message-day">
                      <div
                        className="message-divider sticky-top pb-2"
                        data-label="Today"
                      >
                        &nbsp;
                      </div>

                      {/* Self Message Start */}
                      <div className="message self">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <span>
                              Great! So you will be a butterfly and I will be
                              Batman. Let’s go ask Mom if we can go
                              trick-or-treating tomorrow night by ourselves.
                              Although you are still young, I think I am old
                              enough to watch over the both of us.
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/6.png" />
                          </div>

                          <span className="message-date">9:12am</span>
                          <span className="message-status">Edited</span>

                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                                <span>Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Self Message End */}

                      {/* Received Message Start */}
                      <div className="message">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <h6 className="text-dark">Katherine Schneider</h6>
                            <span>OK, let’s go ask mom!</span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/4.png" />
                          </div>
                          <span className="message-date">9:12am</span>
                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Received Message End */}

                      {/* Self Message Start */}
                      <div className="message self">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <span>
                              MOM! Can Sara and I go trick-or-treating by
                              ourselves tomorrow? I can watch over Sara and make
                              sure she stays out of trouble.
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/6.png" />
                          </div>

                          <span className="message-date">9:12am</span>

                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                                <span>Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Self Message End */}

                      {/* Received Message Start */}
                      <div className="message">
                        <div className="message-wrapper">
                          <div className="message-content">
                            <h6 className="text-dark">Gemma Mendez</h6>
                            <span>
                              Yes, Mom. If we go by ourselves, then you can stay
                              home and relax. You will not have to get cold
                              waiting for us.
                            </span>
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/3.png" />
                          </div>
                          <span className="message-date">9:12am</span>
                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Received Message End */}

                      {/* Self Message Start */}
                      <div className="message self">
                        <div className="message-wrapper">
                          <div className="message-content">
                            Thank you for offering, Patrick. However, I will be
                            worried and I will not be able to relax if you and
                            your brother go by yourselves while I stay home. Let
                            me ask Christine or Ian if one of them can go with
                            both of you. Then I can stay home and relax.
                            Christine! Ian!
                          </div>
                        </div>
                        <div className="message-options">
                          <div className="avatar avatar-sm">
                            <img alt="" src="../../assets/media/avatar/6.png" />
                          </div>

                          <span className="message-date">9:12am</span>

                          <div className="dropdown">
                            <a
                              className="text-muted"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* Default :: Inline SVG */}
                              <svg
                                className="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                              </svg>

                              {/* Alternate :: External File link */}
                              {/* <img className="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> */}
                            </a>

                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> */}
                                <span>Copy</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> */}
                                <span>Edit</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> */}
                                <span>Replay</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> */}
                                <span>Forward</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> */}
                                <span>Favourite</span>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center text-danger"
                                href="#"
                              >
                                {/* Default :: Inline SVG */}
                                <svg
                                  className="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>

                                {/* Alternate :: External File link */}
                                {/* <img className="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> */}
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Self Message End */}
                    </div>
                    {/* Message Day End */}
                  </div>

                  {/* Scroll to finish */}
                  <div className="chat-finished" id="chat-finished"></div>
                </div>

                <div className="chat-footer">
                  <div className="attachment">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary btn-icon btn-minimal btn-sm"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          className="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        {/* <img className="injectable hw-20" src="./../../assets/media/heroicons/outline/plus-circle.svg" alt="">  */}
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <svg
                            className="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {/* <img className="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/photograph.svg" alt="">  */}
                          <span>Gallery</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <svg
                            className="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                          </svg>

                          {/* <img className="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/volume-up.svg" alt="">  */}
                          <span>Audio</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <svg
                            className="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>

                          {/* <img className="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/document.svg" alt="">  */}
                          <span>Document</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <svg
                            className="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>

                          {/* <img className="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/user.svg" alt="">  */}
                          <span>Contact</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <svg
                            className="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>

                          {/* <img className="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/location-marker.svg" alt="">  */}
                          <span>Location</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <svg
                            className="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>

                          {/* <img className="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/chart-square-bar.svg" alt="">  */}
                          <span>Poll</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <textarea
                    className="form-control emojionearea-form-control"
                    id="messageInput"
                    rows="1"
                    placeholder="Type your message here..."
                  ></textarea>
                  <div
                    className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
                    role="button"
                  >
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>

                    {/* <img src="./../../assets/media/heroicons/outline/arrow-right.svg" alt="" className="injectable">  */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <div className="avatar bg-success text-light d-none d-sm-inline-block fixed-bottom-right mr-3">
        <span>
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
        </span>
      </div> */}
      <div className="fixed-bottom-right"  onClick={() => { navigate("/chatgroup") }}>
        <button className="rounded-button">
          <span>
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
          </span>
        </button>
      </div>
    </>
  );
};

export default chat;
