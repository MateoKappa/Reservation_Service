import React from "react";
import styles from "./Works.module.scss";
import { useState } from "react";
function Works() {
  const [phonePage, setPhonePage] = useState(1);
  const [page, setPage] = useState(0);
  const pagechecker = () => {
    if (page >= 2) setPage(0);
    else setPage(page + 1);
  };
  return (
    <div className={styles.works}>
      <div className={styles.question}>
        <div className={styles.text}>
          <h2> Τι κάνει η υπηρεσία μας;</h2>
          <div style={{ display: "flex" }}>
            <h3>Πως δουλεύει;</h3>
            <h3>Γιατι τωρα;</h3>
            <h3>Ανταγωνισμος;</h3>
          </div>
        </div>

        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_aesgckiv.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ height: 400, width: 400 }}
        ></lottie-player>
      </div>
      <div className={styles.appDetails}>
        {page == 0 ? (
          <div className={styles.description}>
            <div onClick={() => pagechecker()} className={styles.arrow}>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <h3>
              Η υπηρεσια μας προσφερει ένα σύστημα κρατήσεων με εξτρα
              χαρακτηριστικα για μια καλυτερη διαχείριση και παραλληλα
              βολικοτητα στον καταναλωτη.
            </h3>
            ​ <h4 id="1">Η εφαρμογή μας αφορά B2Β & Β2C​ </h4>
            <p id="1">
              ​ Business: <br /> 1)Δυνατότητα ανανέωσης τραπεζιών <br />
              2)Διαχείριση κρατήσεων.
              <br />​ ​ Customer: <br /> 1)Διαθεσιμότητα τραπεζιών <br />
              2)Δημιουργία κράτησης.​
            </p>
          </div>
        ) : (
          <div className={styles.description}>
            <div onClick={() => pagechecker()} className={styles.arrow}>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <h2>Γιατι τωρα;</h2>​ <h4>Μετάβαση στον ψηφιακό κόσμο​ </h4>
            <p>
              1)Δυνατότητα ανανέωσης τραπεζιών <br />
            </p>
            <h4>Μετάβαση στον ψηφιακό κόσμο​ </h4>
            <p>
              1)Πρόβλημα συνωστισμού 
              <br />
            </p>
            <h4>
              Έλλειψη ψηφιακών πληροφοριών διαχείρισης διαθεσιμότητας
              καταστημάτων​{" "}
            </h4>
            <p>
              1)Δυνατότητα ανανέωσης τραπεζιών <br />
            </p>
          </div>
        )}

        <div
          style={page == 1 ? { backgroundColor: "rgba(0, 0, 0, 0.904)" } : null}
          className={styles.phone}
        >
          <div style={{ zIndex: 2 }}>
            <div className={styles.iphoneCamera}></div>
            <q>Speaker</q>
            <b>Camera</b>
          </div>
          {page == 0 ? (
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
              {phonePage == 0 ? (
                <div>
                  <div className={styles.topPicks}>
                    <p>Top Picks</p>
                    <div style={{ display: "flex" }}>
                      <div className={styles.Item}>
                        <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Prassein-Aloga-Blog-Post-4-images.jpg" />
                        <h5>PRASSEIN ALOGA Restaurant</h5>
                        <h6>
                          <i className="fa-solid fa-location-dot"></i> Larissa,
                          Greece
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
                          <i className="fa-solid fa-location-dot"></i> Larissa,
                          Greece
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
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
                          </h6>
                          <p>20$</p>
                        </div>
                      </div>
                      <div className={styles.item}>
                        <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Monark-Blog-Post-4-images.jpg" />

                        <div className={styles.details}>
                          <h5>Monark Comfort Food Restaurant</h5>
                          <h6>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
                          </h6>
                          <p>40$</p>
                        </div>
                      </div>
                      <div className={styles.item}>
                        <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/Floyd-Blog-Post-4-images.jpg" />
                        <div className={styles.details}>
                          <h5> Floyd Food Communityt</h5>
                          <h6>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
                          </h6>
                          <p>60$</p>
                        </div>
                      </div>
                      <div className={styles.item}>
                        <img src="https://hellothessaloniki.gr/wp-content/uploads/2021/03/4-epoxes-Blog-Post-4-images.jpg" />
                        <div className={styles.details}>
                          <h5>Epohes Greek Restaurant</h5>
                          <h6>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
                          </h6>
                          <p>20$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
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
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
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
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
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
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Larissa, Greece
                          </h6>
                          <p>20$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.navbar}>
                {phonePage == 0 ? (
                  <i id="picked" className="fa-solid fa-compass"></i>
                ) : (
                  <i
                    onClick={() => setPhonePage(0)}
                    className="fa-light fa-compass"
                  ></i>
                )}
                {phonePage == 1 ? (
                  <i
                    id="picked"
                    onClick={() => setPhonePage(1)}
                    className="fa-solid fa-heart"
                  ></i>
                ) : (
                  <i
                    onClick={() => setPhonePage(1)}
                    className="fa-light fa-heart"
                  ></i>
                )}
                {phonePage == 2 ? (
                  <i id="picked" className="fa-solid fa-clock"></i>
                ) : (
                  <i
                    onClick={() => setPhonePage(2)}
                    className="fa-light fa-clock"
                  ></i>
                )}
                {phonePage == 3 ? (
                  <i id="picked" className="fa-solid fa-user"></i>
                ) : (
                  <i
                    onClick={() => setPhonePage(3)}
                    className="fa-light fa-user"
                  ></i>
                )}
              </div>
            </>
          ) : page == 1 ? (
            <div className={styles.now}>
              <img
                id="1"
                src="https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960"
              />

              <img
                id="2"
                src="https://media.licdn.com/dms/image/C5112AQHuTouTze72Hw/article-cover_image-shrink_720_1280/0/1562154901121?e=2147483647&v=beta&t=zxmZkMOuoyjKMHfijnyZ_8N0ZqgHZqklTSHxmk4Oo3A"
              />

              <div className={styles.fullEmpty}>
                <img
                  id="left"
                  src="https://c1.wallpaperflare.com/preview/472/200/946/shop-coffee-couch-table.jpg"
                />
                <img
                  id="right"
                  src="https://pame.gr/wp-content/uploads/2016/01/kafeteria-gemati.jpg"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Works;
