const Profile = () => {
  return (
    <section id="profile">
      <header>
        <h2>PROFILE</h2>
      </header>
      <div>
        <ul className="flex grid md:grid-flow-col justify-items-center">
          <li className="flex-1 grid  md:w-96 md:grid my-10">
            <dl>
              <dt>社名</dt>
              <dd>Sample Company</dd>
              <dt>代表取締役</dt>
              <dd>見本 太郎</dd>
              <dt>住所</dt>
              <dd>見本県見本市仮区見本町1-3-5</dd>
              <dt>電話番号</dt>
              <dd>01234-567-8901</dd>
              <dt>設立</dt>
              <dd>20XX年5月5日</dd>
              <dt>資本金</dt>
              <dd>1,000,000円</dd>
              <dt>主な取引先</dt>
              <dd>
                <p>
                  <a href="#" target="_blank">
                    見本商事株式会社
                  </a>
                </p>
                <p>
                  <a href="#" target="_blank">
                    株式会社年中無休商事
                  </a>
                </p>
                <p>
                  <a href="#" target="_blank">
                    株式会社仮称
                  </a>
                </p>
              </dd>
            </dl>
          </li>
          <li className="flex-1 grid md:justify-items-stretch md:w-96 md:grid my-10">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5937927089367!2d136.92980931491988!3d36.70829797996758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff781ec5af4ca3f%3A0x2ade3e8e4c2801b8!2z56aP5bKh6aeF!5e0!3m2!1sja!2sus!4v1478313402186"></iframe>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
