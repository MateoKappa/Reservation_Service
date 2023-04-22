import React from "react";
import styles from "./Works.module.scss";
import { useState } from "react";
function Works() {
  const [phonePage, setPhonePage] = useState(1);
  const [page, setPage] = useState(0);
  return (
    <div className={styles.mockUp}>
      <div
        style={page == 1 ? { backgroundColor: "rgba(0, 0, 0, 0.904)" } : null}
        className={styles.phone}
      >
        <div style={{ zIndex: 2 }}>
          <div className={styles.iphoneCamera}></div>
          <q>Speaker</q>
          <b>Camera</b>
        </div>

        <>
          {" "}
          <div className={styles.logo}>
            {" "}
            <p>Explore</p>
            <p id="logo">RS</p>
          </div>
          <div className={styles.search}>
            <i class="fa-regular fa-magnifying-glass"></i>
          </div>
          <div>
            <div className={styles.topPicks}>
              <p>Top Picks</p>
              <div style={{ display: "flex" }}>
                <div className={styles.Item}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Prassein-Aloga-Blog-Post-4-images.jpg" />
                  <h5>PRASSEIN ALOGA Restaurant</h5>
                  <h6>
                    <i className="fa-solid fa-location-dot"></i> Larissa, Greece
                  </h6>
                  <div className={styles.priceLike}>
                    <p>20$</p>
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className={styles.Item}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Monark-Blog-Post-4-images.jpg" />
                  <h5>Monark Comfort Restaurant</h5>
                  <h6>
                    <i className="fa-solid fa-location-dot"></i> Larissa, Greece
                  </h6>
                  <div className={styles.priceLike}>
                    <p>40$</p>
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.near}>
              {" "}
              <p>Near you</p>
              <div className={styles.near_items}>
                <div className={styles.item}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Prassein-Aloga-Blog-Post-4-images.jpg" />
                  <div className={styles.details}>
                    <h5>PRASSEIN ALOGA Restaurant</h5>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>20$</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Monark-Blog-Post-4-images.jpg" />

                  <div className={styles.details}>
                    <h5>Monark Comfort Food Restaurant</h5>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>40$</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Floyd-Blog-Post-4-images.jpg" />
                  <div className={styles.details}>
                    <h5> Floyd Food Communityt</h5>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>60$</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/4-epoxes-Blog-Post-4-images.jpg" />
                  <div className={styles.details}>
                    <h5>Epohes Greek Restaurant</h5>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>20$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navbar}>
            <i id="picked" className="fa-solid fa-compass"></i>

            <i className="fa-light fa-heart"></i>

            <i className="fa-light fa-clock"></i>

            <i className="fa-light fa-user"></i>
          </div>
        </>
      </div>
      <div
        style={page == 1 ? { backgroundColor: "rgba(0, 0, 0, 0.904)" } : null}
        className={styles.phone}
      >
        <div style={{ zIndex: 2 }}>
          <div className={styles.iphoneCamera}></div>
          <q>Speaker</q>
          <b>Camera</b>
        </div>

        <>
          {" "}
          <div className={styles.logo}>
            {" "}
            <p>Explore</p>
            <p id="logo">RS</p>
          </div>
          <div className={styles.search}>
            <i class="fa-regular fa-magnifying-glass"></i>
          </div>
          <div className={styles.likedPage}>
            <div className={styles.tags}>
              <p>
                Price <i class="fa-solid fa-chevron-down"></i>
              </p>{" "}
              <p>
                Time <i class="fa-solid fa-chevron-down"></i>
              </p>{" "}
              <p>
                Available <i class="fa-solid fa-chevron-down"></i>
              </p>{" "}
            </div>
            <div className={styles.liked}>
              <div className={styles.likedItem}>
                <div className={styles.text}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/4-epoxes-Blog-Post-4-images.jpg" />{" "}
                  <div className={styles.nameLikes}>
                    <h5>Epohes Greek Restaurant</h5>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className={styles.locationMoney}>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>20$</p>
                  </div>
                </div>
              </div>
              <div className={styles.likedItem}>
                <div className={styles.text}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Prassein-Aloga-Blog-Post-4-images.jpg" />{" "}
                  <div className={styles.nameLikes}>
                    <h5>PRASSEIN ALOGA Restaurant</h5>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className={styles.locationMoney}>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>40$</p>
                  </div>
                </div>
              </div>
              <div className={styles.likedItem}>
                <div className={styles.text}>
                  <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Monark-Blog-Post-4-images.jpg" />{" "}
                  <div className={styles.nameLikes}>
                    <h5>Epohes Greek Restaurant</h5>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className={styles.locationMoney}>
                    <h6>
                      <i className="fa-solid fa-location-dot"></i> Larissa,
                      Greece
                    </h6>
                    <p>20$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navbar}>
            <i
              onClick={() => setPhonePage(0)}
              className="fa-light fa-compass"
            ></i>
            <i
              id="picked"
              onClick={() => setPhonePage(1)}
              className="fa-solid fa-heart"
            ></i>

            <i
              onClick={() => setPhonePage(2)}
              className="fa-light fa-clock"
            ></i>

            <i onClick={() => setPhonePage(3)} className="fa-light fa-user"></i>
          </div>
        </>
      </div>
    </div>
  );
}

export default Works;
