import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BulmaApp, getRandomSwatch } from '../../dist';

// eslint-disable-next-line  import/no-unassigned-import
import './App.css';

const Spinner = () => (
  <div className="sk-circle">
    <div className="sk-circle1 sk-child" />
    <div className="sk-circle2 sk-child" />
    <div className="sk-circle3 sk-child" />
    <div className="sk-circle4 sk-child" />
    <div className="sk-circle5 sk-child" />
    <div className="sk-circle6 sk-child" />
    <div className="sk-circle7 sk-child" />
    <div className="sk-circle8 sk-child" />
    <div className="sk-circle9 sk-child" />
    <div className="sk-circle10 sk-child" />
    <div className="sk-circle11 sk-child" />
    <div className="sk-circle12 sk-child" />
  </div>
);

const Article = ({ className }) => (
  <div className="column">
    <article className={`message ${className}`}>
      <div className="message-header">
        <p>Link</p>
        <button className="delete" type="button" aria-label="delete" />
      </div>
      <div className="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus
      </div>
    </article>
  </div>
);

Article.propTypes = {
  className: PropTypes.string
};

Article.defaultProps = {
  className: ''
};

const Level = () => (
  <nav className="level section">
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Tweets</p>
        <p className="title">3,456</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Following</p>
        <p className="title">123</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Followers</p>
        <p className="title">456K</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Likes</p>
        <p className="title">789</p>
      </div>
    </div>
  </nav>
);

const Media = () => (
  <div className="section">
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>Barbara Middleton</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
            eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
            mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br />
            <small>
              <a>Like</a> · <a>Reply</a> · 3 hrs
            </small>
          </p>
        </div>

        <article className="media">
          <figure className="media-left">
            <p className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Sean Brown</strong>
                <br />
                Donec sollicitudin urna eget eros malesuada sagittis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla
                sagittis, a lobortis leo feugiat.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 2 hrs
                </small>
              </p>
            </div>

            <article className="media">
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
              lorem cursus ullamcorper sit amet nec massa.
            </article>

            <article className="media">
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
              Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
              tincidunt iaculis diam non, porta aliquet tortor.
            </article>
          </div>
        </article>

        <article className="media">
          <figure className="media-left">
            <p className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Kayli Eunice </strong>
                <br />
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
                Maecenas varius felis sit amet magna vestibulum euismod
                malesuada cursus libero. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae;
                Phasellus lacinia non nisl id feugiat.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 2 hrs
                </small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </article>
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea className="textarea" placeholder="Add a comment..." />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="button" className="button">
              Post comment
            </button>
          </p>
        </div>
      </div>
    </article>
  </div>
);

const Hero = ({ className }) => (
  <section
    style={{ width: '100%' }}
    className={`hero is-medium ${className} is-bold`}
  >
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Primary bold title</h1>
        <h2 className="subtitle">Primary bold subtitle</h2>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  className: PropTypes.string
};

Hero.defaultProps = {
  className: ''
};

const Tiles = () => (
  <div className="tile is-ancestor section">
    <div className="tile is-vertical is-8">
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-primary">
            <p className="title">Vertical...</p>
            <p className="subtitle">Top tile</p>
          </article>
          <article className="tile is-child notification is-warning">
            <p className="title">...tiles</p>
            <p className="subtitle">Bottom tile</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-danger">
          <p className="title">Wide tile</p>
          <p className="subtitle">Aligned with the right tile</p>
          <div className="content" />
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <div className="content">
          <p className="title">Tall tile</p>
          <p className="subtitle">With even more content</p>
          <div className="content" />
        </div>
      </article>
    </div>
  </div>
);

const Table = () => (
  <table className="table section">
    <thead>
      <tr>
        <th>
          <abbr title="Position">Pos</abbr>
        </th>
        <th>Team</th>
        <th>
          <abbr title="Played">Pld</abbr>
        </th>
        <th>
          <abbr title="Won">W</abbr>
        </th>
        <th>
          <abbr title="Drawn">D</abbr>
        </th>
        <th>
          <abbr title="Lost">L</abbr>
        </th>
        <th>
          <abbr title="Goals for">GF</abbr>
        </th>
        <th>
          <abbr title="Goals against">GA</abbr>
        </th>
        <th>
          <abbr title="Goal difference">GD</abbr>
        </th>
        <th>
          <abbr title="Points">Pts</abbr>
        </th>
        <th>Qualification or relegation</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>
          <abbr title="Position">Pos</abbr>
        </th>
        <th>Team</th>
        <th>
          <abbr title="Played">Pld</abbr>
        </th>
        <th>
          <abbr title="Won">W</abbr>
        </th>
        <th>
          <abbr title="Drawn">D</abbr>
        </th>
        <th>
          <abbr title="Lost">L</abbr>
        </th>
        <th>
          <abbr title="Goals for">GF</abbr>
        </th>
        <th>
          <abbr title="Goals against">GA</abbr>
        </th>
        <th>
          <abbr title="Goal difference">GD</abbr>
        </th>
        <th>
          <abbr title="Points">Pts</abbr>
        </th>
        <th>Qualification or relegation</th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <th>1</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
            title="Leicester City F.C."
          >
            Leicester City
          </a>{' '}
          <strong>(C)</strong>
        </td>
        <td>38</td>
        <td>23</td>
        <td>12</td>
        <td>3</td>
        <td>68</td>
        <td>36</td>
        <td>+32</td>
        <td>81</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
            title="2016–17 UEFA Champions League"
          >
            Champions League group stage
          </a>
        </td>
      </tr>
      <tr>
        <th>2</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Arsenal_F.C."
            title="Arsenal F.C."
          >
            Arsenal
          </a>
        </td>
        <td>38</td>
        <td>20</td>
        <td>11</td>
        <td>7</td>
        <td>65</td>
        <td>36</td>
        <td>+29</td>
        <td>71</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
            title="2016–17 UEFA Champions League"
          >
            Champions League group stage
          </a>
        </td>
      </tr>
      <tr>
        <th>3</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
            title="Tottenham Hotspur F.C."
          >
            Tottenham Hotspur
          </a>
        </td>
        <td>38</td>
        <td>19</td>
        <td>13</td>
        <td>6</td>
        <td>69</td>
        <td>35</td>
        <td>+34</td>
        <td>70</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
            title="2016–17 UEFA Champions League"
          >
            Champions League group stage
          </a>
        </td>
      </tr>
      <tr className="is-selected">
        <th>4</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
            title="Manchester City F.C."
          >
            Manchester City
          </a>
        </td>
        <td>38</td>
        <td>19</td>
        <td>9</td>
        <td>10</td>
        <td>71</td>
        <td>41</td>
        <td>+30</td>
        <td>66</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
            title="2016–17 UEFA Champions League"
          >
            Champions League play-off round
          </a>
        </td>
      </tr>
      <tr>
        <th>5</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
            title="Manchester United F.C."
          >
            Manchester United
          </a>
        </td>
        <td>38</td>
        <td>19</td>
        <td>9</td>
        <td>10</td>
        <td>49</td>
        <td>35</td>
        <td>+14</td>
        <td>66</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
            title="2016–17 UEFA Europa League"
          >
            Europa League group stage
          </a>
        </td>
      </tr>
      <tr>
        <th>6</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Southampton_F.C."
            title="Southampton F.C."
          >
            Southampton
          </a>
        </td>
        <td>38</td>
        <td>18</td>
        <td>9</td>
        <td>11</td>
        <td>59</td>
        <td>41</td>
        <td>+18</td>
        <td>63</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
            title="2016–17 UEFA Europa League"
          >
            Europa League group stage
          </a>
        </td>
      </tr>
      <tr>
        <th>7</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
            title="West Ham United F.C."
          >
            West Ham United
          </a>
        </td>
        <td>38</td>
        <td>16</td>
        <td>14</td>
        <td>8</td>
        <td>65</td>
        <td>51</td>
        <td>+14</td>
        <td>62</td>
        <td>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round"
            title="2016–17 UEFA Europa League"
          >
            Europa League third qualifying round
          </a>
        </td>
      </tr>
      <tr>
        <th>8</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Liverpool_F.C."
            title="Liverpool F.C."
          >
            Liverpool
          </a>
        </td>
        <td>38</td>
        <td>16</td>
        <td>12</td>
        <td>10</td>
        <td>63</td>
        <td>50</td>
        <td>+13</td>
        <td>60</td>
        <td />
      </tr>
      <tr>
        <th>9</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
            title="Stoke City F.C."
          >
            Stoke City
          </a>
        </td>
        <td>38</td>
        <td>14</td>
        <td>9</td>
        <td>15</td>
        <td>41</td>
        <td>55</td>
        <td>−14</td>
        <td>51</td>
        <td />
      </tr>
      <tr>
        <th>10</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Chelsea_F.C."
            title="Chelsea F.C."
          >
            Chelsea
          </a>
        </td>
        <td>38</td>
        <td>12</td>
        <td>14</td>
        <td>12</td>
        <td>59</td>
        <td>53</td>
        <td>+6</td>
        <td>50</td>
        <td />
      </tr>
      <tr>
        <th>11</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Everton_F.C."
            title="Everton F.C."
          >
            Everton
          </a>
        </td>
        <td>38</td>
        <td>11</td>
        <td>14</td>
        <td>13</td>
        <td>59</td>
        <td>55</td>
        <td>+4</td>
        <td>47</td>
        <td />
      </tr>
      <tr>
        <th>12</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
            title="Swansea City A.F.C."
          >
            Swansea City
          </a>
        </td>
        <td>38</td>
        <td>12</td>
        <td>11</td>
        <td>15</td>
        <td>42</td>
        <td>52</td>
        <td>−10</td>
        <td>47</td>
        <td />
      </tr>
      <tr>
        <th>13</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Watford_F.C."
            title="Watford F.C."
          >
            Watford
          </a>
        </td>
        <td>38</td>
        <td>12</td>
        <td>9</td>
        <td>17</td>
        <td>40</td>
        <td>50</td>
        <td>−10</td>
        <td>45</td>
        <td />
      </tr>
      <tr>
        <th>14</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
            title="West Bromwich Albion F.C."
          >
            West Bromwich Albion
          </a>
        </td>
        <td>38</td>
        <td>10</td>
        <td>13</td>
        <td>15</td>
        <td>34</td>
        <td>48</td>
        <td>−14</td>
        <td>43</td>
        <td />
      </tr>
      <tr>
        <th>15</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
            title="Crystal Palace F.C."
          >
            Crystal Palace
          </a>
        </td>
        <td>38</td>
        <td>11</td>
        <td>9</td>
        <td>18</td>
        <td>39</td>
        <td>51</td>
        <td>−12</td>
        <td>42</td>
        <td />
      </tr>
      <tr>
        <th>16</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
            title="A.F.C. Bournemouth"
          >
            AFC Bournemouth
          </a>
        </td>
        <td>38</td>
        <td>11</td>
        <td>9</td>
        <td>18</td>
        <td>45</td>
        <td>67</td>
        <td>−22</td>
        <td>42</td>
        <td />
      </tr>
      <tr>
        <th>17</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
            title="Sunderland A.F.C."
          >
            Sunderland
          </a>
        </td>
        <td>38</td>
        <td>9</td>
        <td>12</td>
        <td>17</td>
        <td>48</td>
        <td>62</td>
        <td>−14</td>
        <td>39</td>
        <td />
      </tr>
      <tr>
        <th>18</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
            title="Newcastle United F.C."
          >
            Newcastle United
          </a>{' '}
          <strong>(R)</strong>
        </td>
        <td>38</td>
        <td>9</td>
        <td>10</td>
        <td>19</td>
        <td>44</td>
        <td>65</td>
        <td>−21</td>
        <td>37</td>
        <td>
          Relegation to the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
            title="2016–17 Football League Championship"
          >
            Football League Championship
          </a>
        </td>
      </tr>
      <tr>
        <th>19</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
            title="Norwich City F.C."
          >
            Norwich City
          </a>{' '}
          <strong>(R)</strong>
        </td>
        <td>38</td>
        <td>9</td>
        <td>7</td>
        <td>22</td>
        <td>39</td>
        <td>67</td>
        <td>−28</td>
        <td>34</td>
        <td>
          Relegation to the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
            title="2016–17 Football League Championship"
          >
            Football League Championship
          </a>
        </td>{' '}
      </tr>
      <tr>
        <th>20</th>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/Aston_Villa_F.C."
            title="Aston Villa F.C."
          >
            Aston Villa
          </a>{' '}
          <strong>(R)</strong>
        </td>
        <td>38</td>
        <td>3</td>
        <td>8</td>
        <td>27</td>
        <td>27</td>
        <td>76</td>
        <td>−49</td>
        <td>17</td>
        <td>
          Relegation to the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
            title="2016–17 Football League Championship"
          >
            Football League Championship
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

const Tags = () => (
  <div className="section field is-grouped is-grouped-multiline">
    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">Technology</a>
        <a className="tag is-delete" />
      </div>
    </div>

    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">CSS</a>
        <a className="tag is-delete" />
      </div>
    </div>

    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">Flexbox</a>
        <a className="tag is-delete" />
      </div>
    </div>

    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">Web Design</a>
        <a className="tag is-delete" />
      </div>
    </div>

    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">Open Source</a>
        <a className="tag is-delete" />
      </div>
    </div>

    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">Community</a>
        <a className="tag is-delete" />
      </div>
    </div>

    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-link">Documentation</a>
        <a className="tag is-delete" />
      </div>
    </div>
  </div>
);

const Form = () => (
  <div className="section" style={{ maxWidth: 500, margin: 'auto' }}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="field">
      <label className="label">Username</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-success"
          type="text"
          placeholder="Text input"
          value="bulma"
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check" />
        </span>
      </div>
      <p className="help is-success">This username is available</p>
    </div>

    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-danger"
          type="email"
          placeholder="Email input"
          value="hello@"
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      </div>
      <p className="help is-danger">This email is invalid</p>
    </div>

    <div className="field">
      <label className="label">Subject</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>

    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea" />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" />I agree to the{' '}
          <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="radio">
          <input type="radio" name="question" />
          Yes
        </label>
        <label className="radio">
          <input type="radio" name="question" />
          No
        </label>
      </div>
    </div>

    <div className="field is-grouped">
      <div className="control">
        <button type="button" className="button is-link">
          Submit
        </button>
      </div>
      <div className="control">
        <button type="button" className="button is-text">
          Cancel
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer style={{ width: '100%' }} className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>
        . The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed{' '}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </a>
        {''}.
      </p>
    </div>
  </footer>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'default'
    };
  }

  render() {
    return (
      <div className="App">
        <React.Suspense maxDuration={300} fallback={<Spinner />}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              className="button randomButton"
              type="button"
              onClick={() => {
                let swatch;

                while (!swatch || swatch === this.state.theme) {
                  swatch = getRandomSwatch();
                }

                this.setState({ theme: swatch });
              }}
            >
              new theme
            </button>

            <a
              href="https://github.com/hipstersmoothie/bulma-swatch-hook"
              style={{
                fontSize: 30,
                position: 'absolute',
                right: 30
              }}
            >
              <span className="icon is-large">
                <i className="fab fa-github" />
              </span>
            </a>
          </div>

          <BulmaApp swatch={this.state.theme}>
            <Hero className="is-primary" />

            <div className="container">
              <Tags />
              <div className="columns section">
                <Article className="is-link" />
                <Article className="is-info" />
                <Article className="is-success" />
                <Article className="is-warning" />
                <Article className="is-danger" />
              </div>

              <Level />
              <Tiles />
              <Form />
              <Table />
              <Media />
            </div>
            <Footer />
          </BulmaApp>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
